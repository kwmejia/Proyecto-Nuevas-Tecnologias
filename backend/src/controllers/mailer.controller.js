import buildEmail from '../helpers/buildEmail.js'
import Mailer from '../models/Mailer.js'

export async function sendEmail (req, res) {
  try {
    const { body } = req
    await new Mailer({ to: body.email }).sendEmail()
    const emailInfo = buildEmail(body)
    await new Mailer(emailInfo).sendEmail()
    res.status(200).json({ msg: 'Email sent' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
