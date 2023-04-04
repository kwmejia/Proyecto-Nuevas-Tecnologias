export default function templateHtmlEmail (email, message, name, phone) {
  return `
    <div style="background: #f5f5f5; width: 100%; height: 100%; padding: 20px 0;">
      <div style="background: #fff; width: 100%; max-width: 500px; margin: 0 auto; padding: 20px 30px; border-radius: 5px;">
        <div style="width: 100%; text-align: center;">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2F2022%2F08%2F22%2Fworld%2Fdogs-tears-emotions-scn-wellness%2Findex.html&psig=AOvVaw2ZKP3G3PQ7g-HB-OlU9QWf&ust=1680727949003000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjs8dSNkf4CFQAAAAAdAAAAABAE" alt="logo" border="0" style="width: 100px;">
        </div>
        <div style="width: 100%; text-align: center; margin: 20px 0;">
          <h1 style="font-size: 1.5rem; color: #333;">¡Nuevo correo en <span style="color: #f00;">Veterinaria Dalih</span>!</h1>
        </div>
        <div style="width: 100%; text-align: center; margin: 20px 0;">
        <p style="font-size: 1rem; color: #333;">la persona ${name} ha enviado esto</p>
        <p style="font-size: 1rem; color: #333;">${message}</p>
          <p style="font-size: 1rem; color: #333;">contactos: ${phone} y <a href="${email}" style="display: inline-block; background: #f00; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">${email}</a></p>
        </div>
      </div>
    </div>
  `
}
