import './about.scss';

const About = () => {
  return (
    <section className='cont-quienes-somos '>
      <div className='quienes-somos  mt-5  d-flex  flex-wrap justify-content-around  align-self-center'>
        <div className='bloque1 col-lg-5'>
          <div className='d-flex flex-row justify-content-center'>
            <p className=' fs-2 fw-bold'>Quiénes</p>
            <p className='title-pink fs-2 fw-bold'>somos</p>
          </div>
          
          <p className='text-center d-flex flex-wrap'>Somos una clínica veterinaria que contamos con una
          experiencia de 55 años que se preocupa por la salud 
          y el bienestar de su mascota ofreciéndole una gran atención
          y un buen trato, con los más altos rendimientos en tecnología 
          para la atención médica de su mascota contamos con los 
          mejores médicos veterinarios que les ofrecerá la mejor atención.</p>
        </div>
           
        <img className='imagen' src="\img\karlo-tottoc-ybZ5hRxaWS4-unsplash.jpg" alt="" width={444} height={227}/>
      </div>



       {/* bloque 2  */}
      <div className='cont-mision mt-5 d-flex flex-row  flex-wrap d-flex justify-content-around  align-self-center'>
      <img className='imagen' src="\img\jorge-salvador-Mb7LPvadxHY-unsplash.jpg" alt="" width={444} height={252}/>
        <div className='mision '>
          <div className='d-flex flex-row justify-content-center fw-bold fs-2'>
            <p className='title-pink-dos '>Nuestra</p>
            <p className=''>misión</p>
          </div>
          
          <p className=' text-mision text-center d-flex flex-wrap'>La clínica veterinaria Maxcotas 
            Center SAS tiene como misión 
            prestar el mejor servicio para
            garantizar el bienestar de 
            nuestras mascotas, fortaleciendo
            el vinculo entre las personas
            y sus animales de compañía,
            por ello prestamos servicios
            médicos veterinarios y venta de alimentos
            que garantiza la calidad de vida 
            de las mascotas en el área metropolitana y Santander.</p>
        </div>
      </div>
        {/* bloque 3 */}
      <div className='cont-vision  mt-5 d-flex  flex-wrap justify-content-around  align-self-center'>
        <div className='col-lg-5'>
          <div className='d-flex flex-row justify-content-center'>
            <p className=' fs-2 fw-bold'>Nuestra</p>
            <p className='title-pink-vision fs-2 fw-bold'>visión</p>
          </div>
          
          <p className='text-center text-vision'>Maxcotas Center SAS tiene como visión ser una clínica veterinaria líder en laprestación de los servicios médicos 
          de la mejor calidad en pequeños animales.Nuestras instalaciones de clínica están dotadas de tecnología al servicio de lasalud animal, nuestro compromiso con las familias 
          es mejorar la calidad de vida desus mascotas a través de nuestro equipo médico y auxiliar altamente calificado,que se capacitan constantemente para garantizar el bienestar
          de nuestrasmascotas.</p>
        </div>
        <img className='imagen' src="\img\karlo-tottoc-y_EbiAIQrp4-unsplash.jpg" alt="" width={444} height={227} />
      </div>
    </section>
  )
}

export default About;
