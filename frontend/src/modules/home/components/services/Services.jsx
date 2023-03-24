import './services.scss';

const Services = () => {
  return (
    <div className="fadeIn">
      {/* inicio bloque 1  */}
      <div className='bloque-1  mt-5 d-flex flex-row justify-content-center align-items-center flex-wrap'>
        <div className='izquierdo text-center'>
          <p className='title-bloque-1 fs-3 fw-bold'>Nuestros Servicios</p>
          <p className='texto-bloque-1'>
          Somos una clínica veterinaria que nace en Santander,
          especializada en la prestación de servicios médicos 
          veterinarios para mascotas en Bucaramanga, buscando
          la salud y el bienestar de su mascota, ofreciéndoles 
          excelentes instalaciones con tecnología de punta para
          la atención oportuna de las mascotas. Nuestro personal
          medico esta altamente calificado para atender cualquier
          eventualidad o urgencia de mascotas así mismo 
          brindándoles un servicio integral satisfciendo las 
          necesidades de ustedes, nuestros clientes.
          </p>  
        </div>

        <div>
          <div className='bloque-button-rosa mb-1 d-flex flex-row justify-content-center rounded-pill'>
            {/* button */}
            <p className='fs-4 fw-bolder '>Urgencias 24/7</p>
            <img src="\img\ambulancia.png" alt="" width={32} height={32} />
          </div>

          <img src="\img\patty-brito-Y-3Dt0us7e0-unsplash.jpg" alt=""  width={380} height={240}/>
        </div>
      </div>

      <div className='bloque-2 fs-3 mt-5'>
        <div className='fw-bold d-flex flex-row justify-content-center'>
          <p className='rosa-bloque-2'>Especialistas</p>
          <p >en toda la fauna</p>
        </div>

        <div className='circle-bloque d-flex justify-content-center flex-wrap'>
          <img className='rounded-circle m-3' src="\img\zhengtao-tang-V7SKRhXskv8-unsplash.jpg" alt="" width={200} height={200}/>
          <img className='rounded-circle m-3' src="\img\zetong-li-GX8SZfJWV5k-unsplash.jpg" alt="" width={200} height={200}/>
          <img className='rounded-circle m-3' src="\img\roi-dimor-BHA9lIa48kY-unsplash.jpg" alt="" width={200} height={200}/>
          <img className='rounded-circle m-3' src="\img\karen-lau-2EmW_HIy6Ns-unsplash.jpg" alt="" width={200} height={200}/>
          <img className='rounded-circle m-3' src="\img\eugene-chystiakov-OHxVeYzEBSk-unsplash.jpg" alt="" width={200} height={200}/>
        </div>

      </div>
      {/* fin bloque 2 */}

      <div className='bloque-3 mt-5'>

        <div className='cont-anestesia d-flex flex-row'>
          <div className="w-50">
          <img className='imagenes-servicios' src="\img\img-gal-2-anestesia-petshop-animal.jpg" width={"100%"}/>
          </div>
          <div className='w-50 p-2 d-flex flex-column justify-content-center align-items-center'>
            <p className='fw-bold fs-4'>Anestesía</p>
            <p className='caja-texto text-center '>Todos nuestros procedimientos quirúrgicos se realizan en compañía de una Anestesióloga Veterinaria, la cual bajo su experiencia </p>
          </div>
        </div>

        <div className='cont-cirugias d-flex flex-row'>
          
          <div className='w-50 d-flex flex-column justify-content-center align-items-center'>
            <p className='fw-bold fs-4'>Cirugías</p>
            <p className='caja-texto text-center'>Nuestro equipo de trabajo cuenta con experiencia en la realización de cualquier tipo de cirugías generales o especializadas según el caso de tu mascota. </p>
          </div>
          <div className="w-50">
            <img className='imagenes-servicios' width={"100%"} src="\img\img-gal-3-cirugia-petshop-animal.jpg" />
          </div>

        </div>
        
        <div className='cont-imagenologia d-flex flex-row'> 
          <div className="w-50">
            <img className='imagenes-servicios' width={"100%"} src="\img\img-gal-3-imagenologia-petshop-animal.jpg"  />
          </div>
          <div className='w-50 d-flex flex-column justify-content-center align-items-center'>
            <p className='fw-bold fs-4'>Imagenología</p>
            <p className='caja-texto text-center '>Contamos con equipos de alta tecnología y personal idóneo para la toma y estudio de diferentes exámenes:</p>
          </div>
        </div>

        <div className='cont-hospitalizacion d-flex flex-row'> 
          <div className='w-50 d-flex flex-column justify-content-center align-items-center'>
            <p className='fw-bold fs-4'>Hospitalización</p>
            <p className='caja-texto text-center '>Nuestras Instalaciones están 100% adecuadas para prestar un servicio de calidad, cumpliendo las normas de higiene y protocolos establecidos. .</p>
          </div>
          <div className="w-50">
            <img className='imagenes-servicios'  width={"100%"}  src="\img\img-gal-5-hospitalizacion-petshop-animal.jpg" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Services;