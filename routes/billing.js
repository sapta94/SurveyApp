var config=require('../config')
var stripe=require('stripe')(config.stripeSecretKey)
module.exports=function(app){
    app.post('/api/stripe',function(req,res){

    })
}