const requireUSer = require('./requireUser')
const mongoose = require('mongoose')
const Survey = mongoose.model('surveys')
const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/surveyTemplate');


module.exports=function(app){
    app.post('/api/surveys',requireUSer,async function(req,res){
        if(req.user.credits<1){
            return res.status(401).send({error:'not enough credits'})
        }
        var {title,subject,body,recipients} = req.body
        const survey = new Survey({
            title,
            subject,
            title,
            recipients:recipients.split(',').map(function(email){
                return {email: email.trim()}
            }),
            _user:req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
            await mailer.send();
            await survey.save();
            req.user.credits-=1;
            const user = req.user.save()

            res.send(user)
        } catch(err){
            res.status(422).send(err)
        }
        
        
    })
}