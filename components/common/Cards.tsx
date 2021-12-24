import Image from "next/image";

import Link from "next/link";
import React from "react";

export default React.forwardRef(function Cards() {
  return (
    <section className="container-fluid my-5 bg-light text-dark">
      <div className="row align-items-center">
        <h1 className="text-center">Ofrecemos</h1>
      </div>
      <div>
        <div className="container ">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 border border-primary   btn-outline-primary ">
                <div
                  style={{
                    position: "relative",
                    height: "45vh",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Link href="/servicios/impresiones" passHref>
                    <a>
                      <Image
                        src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223008/estudio_fotografico_perez/impresiones_u2xn6m.jpg"
                        className="card-img-top "
                        layout="fill"
                        objectFit="cover"
                        alt="Impresiones fotograficas"
                        priority
                      />
                    </a>
                  </Link>
                </div>
                <div className="card-body d-flex align-items-center align-self-center ">
                  <h1 className="card-title text-center ">IMPRESIONES</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  h-100 border border-primary   btn-outline-primary ">
                <div
                  style={{
                    position: "relative",
                    height: "45vh",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Link href="/servicios/sesion-fotografico" passHref>
                    <a>
                      <Image
                        src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223000/estudio_fotografico_perez/foto-sesion_qupttf.jpg"
                        className="card-img-top "
                        layout="fill"
                        objectFit="cover"
                        alt="Estudio Fotografico"
                      />
                    </a>
                  </Link>
                </div>
                <div className="card-body d-flex align-items-center align-self-center">
                  <h1 className="card-title text-center ">
                    SESION FOTOGRAFICO
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-primary   btn-outline-primary ">
                <div
                  style={{
                    position: "relative",
                    height: "45vh",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Link href="/servicios/cuadros" passHref>
                    <a>
                      <Image
                        src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223004/estudio_fotografico_perez/cuadros_s8rdbv.jpg"
                        className="card-img-top "
                        layout="fill"
                        objectFit="cover"
                        alt="Venta de Cuadros Fotograficos"
                      />
                    </a>
                  </Link>
                </div>
                <div className="card-body d-flex align-items-center align-self-center">
                  <h1 className="card-title text-center">CUADROS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
