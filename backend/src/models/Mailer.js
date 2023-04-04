import mailer from '../config/mailer.js'
import { EMAIL_USER } from '../../enviromentConfig.js'

class Mailer {
  constructor ({ from = EMAIL_USER, to = EMAIL_USER, subject = 'Hemos recibido tu contacto', text = 'Hemos recibido tu correo', html = '<h3>Lo hemos recibido</h3><p>Hemos recibido tu petición</p>', name = 'no-reply' }) {
    this.from = from
    this.to = to
    this.subject = subject
    this.text = text
    this.html = html
    this.name = name
  }

  async sendEmail () {
    const transporter = await mailer()
    await transporter.sendMail({
      from: `${this.name} ${this.from}`,
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: this.html
    })
  }
}

export default Mailer
