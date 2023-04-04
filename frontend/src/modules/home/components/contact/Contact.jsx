import sendMail from '../../../../services/sendMail'
import './contact.scss'
import GroupInput from './GroupInput'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Loading from '../../../shared/loading/Loading'

const Contact = () => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)

  async function submit (data) {
    setLoading(true)
    const response = await sendMail(data)
    setLoading(false)
    if (!response.error) {
      Swal.fire({ title: 'Mensaje enviado', text: 'Gracias por contactarnos, en breve nos pondremos en contacto contigo', icon: 'success' })
      reset(values => ({
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: ''
      }))
      return
    }
    Swal.fire({ title: 'Error', text: 'Ha ocurrido un error, por favor intenta más tarde', icon: 'error' })
  }

  return (
    <div className='cont-contacto' id="">
      {loading && <Loading />}
      <h3>Contáctenos</h3>
      <p>Quieres contactar con nosotros colaborar con nostros al bienestar de los animalitos, llena el siguiente fórmulario y te estaremos contactando en el menor tiempo posible, recuerda que tus acciones te hacen grande, y ayudar a los más necesitados es un acto que valoramos mucho, de parte de <strong>Pet-Dali</strong> te lo agradecemos</p>
      <form onSubmit={handleSubmit(submit)} className='contact-form'>
        <div className='flex-inputs'>
          <GroupInput register={register} errors={errors} nameRegister='name' placeholder='Brayan Esteban' label='Nombres' />
          <GroupInput register={register} errors={errors} nameRegister='surname' placeholder='Villamizar Fernandez' label='Apellidos' />
        </div>
        <div className='flex-inputs'>
          <GroupInput register={register} errors={errors} nameRegister='phone' placeholder='3154671333' label='Teléfono' />
          <GroupInput register={register} errors={errors} nameRegister='email' placeholder='ejemplo@midominio.com' label='Correo Electrónico' />
        </div>
          <GroupInput register={register} errors={errors} nameRegister='message' placeholder='Tengo un perrito en situación de...' label='Mensaje' textArea />
        <p>Los campos con * son obligatorios</p>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
