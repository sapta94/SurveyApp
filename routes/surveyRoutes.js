const requireUSer = require('./requireUser')
const mongoose = require('mongoose')
const Surveys = mongoose.model('surveys')

module.exports=function(app){
    app.post('/api/surveys',requireUSer,function(req,res){
        if(req.user.credits<1){
            return res.status(401).send({error:'not enough credits'})
        }
        var {title,subject,body,recipients} = req.body
    })
}