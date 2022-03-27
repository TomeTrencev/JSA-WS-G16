const formData = require('form-data');
const Mailgun = require('mailgun.js');
const config = require('../config');

const sendMail = async (to, subject, message) => {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: 'api',
        key: config.get('mailer').api_key
    });
    
    let options = {
        from: config.get('mailer').sender_email ,
        to: to,
        subject:subject,
        html:message
    }

    try {
        let res =  await mg.messages.create(config.get('domain').domain)
    } catch (err) {
        throw err;
    }
};

module.exports = {
    sendMail
}


