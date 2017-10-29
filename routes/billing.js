var config=require('../config')
var stripe=require('stripe')(config.stripeSecretKey)
var requireUser = require('./requireUser')
module.exports=function(app){
    app.post('/api/stripe',requireUser,async function(req,res){
        const charge = await stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'$5 for 5 credits',
            source:req.body.id
        })

        req.user.credits +=5;
        const user = await(req.user.save())
        res.send(user)
    })

}