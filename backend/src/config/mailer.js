import { EMAIL_USER, EMAIL_PASSWORD } from '../../enviromentConfig.js'
import nodemailer from 'nodemailer'

async function mailer () {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD
    }
  })

  return transporter
}

export default mailer
