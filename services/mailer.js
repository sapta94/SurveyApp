const sendgrid = require('sendgrid')
const helper = sendgrid.mail;
const config=require('../config')

class Mailer extends helper.Mail{
    constructor({subject,recipients},content){
        super();

        this.sgAPI=sendgrid(config.sendGridKey);
        this.from_email = new helper.Email('no-reply@emaily.com')
        this.subject = subject
        this.body = new helper.Content('text/html',content)
        this.recipients = this.formatAddresses(recipients)

        this.addContent(this.body)
        this.addClickTracking()
        this.addRecipients()
    }

    formatAddresses(recipients){
        return recipients.map(function(email){
            return new helper.Email(email)
        })
    }

    addClickTracking(){
        const trackSettings=new helper.TrackingSettings();
        const clickTracking=new helper.ClickTracking(true,true)

        trackSettings.setClickTracking(clickTracking)
        this.addTrackingSettings(trackSettings)
    }

    addRecipients(){
        const personalise = new helper.Personalization();

        this.recipients.forEach(function(recipient){
            personalise.addTo(recipient)
        })
        this.addPersonalization(personalise)
    }

    async send(){
        const request = this.sgAPI.emptyRequest({
            method:'POST',
            path:'/v3/mail/send',
            body:this.toJSON()
        })

        const response = await this.sgAPI.API(request);
        return response;
    }
}

module.exports = Mailer