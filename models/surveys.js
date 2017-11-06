const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const RecipientSchema = require('./recipient')

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    yes: {type:String,default:0},
    no: {type:String,default:0},
    recipients: [RecipientSchema],
    _user:{type: Schema.Types.ObjectId,ref:'users'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys',surveySchema) 