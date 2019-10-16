'use strict'

const nodemailer = require('nodemailer')

class MailSender {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service:'Gmail',
      auth: {
        user: 'portfoliomortem@gmail.com',
        pass: 'mortem45',
      },
    })

    this.mailOptions = {
      from: '"Portfolio" <portfoliomortem@gmail.com>',
    }
  }

  sendMail(options) {
    const mailOptions = {
      ...this.mailOptions,
      ...options,
    }

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        return false
      }
      console.log('Message sent: %s', info.messageId)
      return true
    })
  }
}

module.exports = new MailSender()
