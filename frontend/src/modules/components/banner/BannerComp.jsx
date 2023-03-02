
import { useState, useEffect } from 'react';
import './baner.scss';

export const BannerComp = () => {
  const [next, setNext] = useState(false);
  useEffect(() => {

    handleNext();
  }, [next])

  const handleNext = () => {
    const btn = document.querySelector('.carousel-control-prev');
    btn.click();
    setTimeout(() => {
      setNext(!next);
    }, 5000);

  }

  return (
    <section className="cont-banner w-100">
      <div id="carouselExampleFade" className=" carousel slide carousel-fade" data-ride="carousel" data-touch="true">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="cont-item-carousel">
              <img src="/img/vlad-d-qk0HIwcmlvk-unsplash.jpg" />
              <p className="description-item">Cuidamos a tu <br /> ser más <br /> querido</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="cont-item-carousel">
              <div className="cont-img"></div>
              <p className="text-black description-item">Nuestro <br />
                compromiso es con <br />
                <span className="text-general">las mascotas</span>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="cont-item-carousel d-flex justify-content-center">
              <img src="/img/fatty-corgi-EpRAM95thHU-unsplash.jpg" />
              <p className="description-item-center text-center text-black">
                Bienvenidos <br />
                Clínica veterinaria
                <span className="text-general"> Pet-Dalí</span>
              </p>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-nex d-none" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
