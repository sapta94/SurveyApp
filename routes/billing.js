var config=require('../config')
var stripe=require('stripe')(config.stripeSecretKey)
module.exports=function(app){
    app.post('/api/stripe',async function(req,res){
        const charge = await stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'$5 for 5 credits',
            source:req.body.id
        })
        console.log(charge)
    })
}