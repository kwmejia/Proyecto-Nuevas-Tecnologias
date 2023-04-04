import clientHTTP from '../config/configAxios'
export default async function sendMail (data) {
  return await clientHTTP.post('mailer', data)
}
