import Hero from "../components/Hero/index";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Home = ({ mostrarBotonDescripcion, categorias, videos }) => {
  
  return (
    <>
      <Header mostrarBotonDescripcion={mostrarBotonDescripcion} />
      <Hero mostrarBotonDescripcion={mostrarBotonDescripcion} />

      <main className="pb-14 bg-opacity-90 subir-margin relative bg-color">

        {
          categorias.map((categoria) => {
            const videosFiltrados = videos.filter(video => video.categoria === categoria.nombre);

            return videosFiltrados.length > 0 ? (
              <Cards
                categoria={categoria}
                videos={videosFiltrados}
                key={categoria.id}
              />
            ) : (
              <React.Fragment key={categoria.id}></React.Fragment>
            );
          }) 
        }
      </main>

      <Footer mostrarBotonDescripcion={mostrarBotonDescripcion} />
    </>
  );
};

export default Home;
