const sendgrid = require('sendgrid')
const helper = sendgrid.mail;
const config=require('../config')

class Mailer extends helper.Mail{

}

module.exports = Mailer