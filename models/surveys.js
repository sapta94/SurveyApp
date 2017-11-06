const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const RecipientSchema = require('./recipient')

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    yes: {type:String,default:0},
    no: {type:String,default:0},
    recipients: [RecipientSchema]
});

mongoose.model('surveys',surveySchema) 