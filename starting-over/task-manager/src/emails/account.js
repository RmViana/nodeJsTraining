const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to : 'raj.alves96@gmail.com',
    from : 'raj.alves96@gmail.com',
    subject : 'This is my first creation!',
    text : 'I hope this one actually get to you.'
})