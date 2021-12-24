import Image from "next/image";

export default function Carrusel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          style={{ width: "100%", height: "90vh", position: "relative" }}
          className="carousel-item active"
          data-bs-interval="2000"
        >
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221004/estudio_fotografico_perez/impresiones_v2_hbuxmj.jpg"
            className="d-block w-100 "
            alt="impresiones de imagenes"
            priority
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "#fff" }}>IMPRESIONES</h5>
            <p>
              Fotos impresas en la mejor calidad para la satisfacción del
              profesional de las imágenes y el consumidor aficionado.
            </p>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "90vh", position: "relative" }}
          className="carousel-item"
          data-bs-interval="2000"
        >
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg"
            className="d-block w-100"
            alt="Estudio Fotografico Perez"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>FOTO ESTUDIO</h5>
            <p className="text-primary">
              Contamos con un estudio para recrear las fotografías que desees.
            </p>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "90vh", position: "relative" }}
          className="carousel-item"
        >
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221018/estudio_fotografico_perez/cuadros_v2_wgqzxe.jpg"
            className="d-block w-100"
            alt="Venta de Cuadros fotografico"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "#fff" }}>CUADROS</h5>
            <p>
              Nuestros cuadros son elaborados con papel fotográfico en su
              interior para mayor durabilidad y calidad de imagen.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Atras</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
