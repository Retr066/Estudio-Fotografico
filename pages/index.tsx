import type { NextPage } from "next";

import { Layout } from "../components";
import Cards from "../components/common/Cards";
import Carrusel from "../components/common/Carrusel";
const Home: NextPage = () => {
  return (
    <>
      <Layout title="Estudio Perez" description="Estudio Fotografico Perez">
        <Carrusel />
        <section className="container my-5">
          <div className="row align-items-center">
            <h1 className="text-center">BIENVENIDOS</h1>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Somos una microempresa dedicada al rubro fotográfico, nos
                  orientamos a brindar soluciones e ideas creativas para tus
                  proyectos fotográfico. Nuestro objetivo es trasmitir a través
                  de la fotografía, la historia que deseas contar y guardar ese
                  momento valioso para ti.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Micrompresa
                <cite title="Source Title">Estudio Fotografico Perez</cite>
              </figcaption>
            </figure>
          </div>
        </section>
        <Cards></Cards>
      </Layout>
    </>
  );
};

export default Home;
