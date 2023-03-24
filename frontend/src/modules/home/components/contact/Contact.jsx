import './contact.scss'

const Contact = () => {
  return (
    <div className='cont-contacto'>
     <h1 className='text-center fw-bold mt-3'>Tu mejor amigo estará en las mejores manos</h1>
      <div className='cont-general d-flex justify-content-center align-items-center'>
        <img className='perrita-parida' src="\img\perrita-parida.jpg" alt=""  width={200} />
        
        <div className='numbers m-5'>

          <div className=' my-3 d-flex  align-items-center '>
            <img src="\img\whatsapp.png" alt="" width={30} />
            <p className='px-3 py-0'>3187689789</p>
          </div>

          <div className='my-3 d-flex  align-items-center '>
            <img src="\img\telefono-inteligente.png" alt="" width={30} />
            <p className='px-3'>+57 7679087690</p>
          </div>

          <div className=' my-3 d-flex  align-items-center '>
            <img src="\img\direction.png" alt="" width={30}  />
            <p className='px-3'>Calle 23 #40-76 provenza</p>
          </div>

          <div className='my-3 d-flex  align-items-center'>
            <img src="\img\almacen.png" alt=""  width={30} />
            <p className='px-3'>Veterinaria-pet-dali@gmail.com</p>
          </div>
      </div>

        </div>

    </div>
  )
}

export default Contact;