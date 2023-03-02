import './descriptions.scss';

const Description = () => {
  return (
    <section className="cont-description container fadeIn">
      <div className="row m-0">

        {/* Left */}
        <div className="col-lg-7 info-left-cont text-center ">
          <h2>La familia <span className="text-general">Pet-Dalí</span></h2>
          <img src="/img/house.png" width={80} className="my-2" />
          <div className="mt-2">
            <p><strong>Tu mascota hace parte de nosotros</strong></p>
            <p className="description-text px-2">
              En <span className="text-general">Pet-Dalí</span> buscamos marcar la diferencia, inyectando dosis
              de amor y calor humano a nuestras mascotas.Contamos con
              un equipo de trabajo altamente calificado, 20 años de experiencia
              dedicados no solo a realizar una labor diaria, si no a fortalecer
              cada día su pasión y generar vínculos de confianza con sus
              pacientes.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="col-lg-5 info-right-cont">
          <div className="d-flex gap-3 h-100">
            <div className="grid-left d-flex  flex-column gap-3 w-50">
              <img src="/img/alvan-nee-bQaAJCbNq3g-unsplash.jpg" className="h-50 w-100" />
              <img src="/img/tiny-elch-QYhTE97tgP4-unsplash.jpg" className="h-50 w-100" />
            </div>

            <div className="w-50">
              <img src="/img/ivana-la-61jg6zviI7I-unsplash.jpg" className="h-100 w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column mt-4 text-center cont-exp w-100 d-flex justify-content-center">
        <h2 className="mt-3">Grandes experiencias y <span className="text-general"> clientes felices</span></h2>
        <div className="mt-5 d-flex gap-3 flex-wrap w-100">
          <div className=" justify-center left-cont">
            <div className="img-cont"></div>
          </div>

          <div className=" right-cont">
            <div className="img-cont"></div>
            <div className="img-cont"></div>
            <div className="img-cont"></div>
            <div className="img-cont"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description;