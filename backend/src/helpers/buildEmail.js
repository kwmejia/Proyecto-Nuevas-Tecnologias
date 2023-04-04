import templateHtmlEmail from './templateHtmlEmail.js'

export default function buildEmail ({ email, name, surname, message, phone }) {
  return {
    name: `${name} ${surname}`,
    from: email,
    html: templateHtmlEmail(email, message, `${name} ${surname}`, phone),
    message
  }
}
