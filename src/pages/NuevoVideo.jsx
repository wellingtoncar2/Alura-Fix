import FormVideo from '../components/Formulario';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NuevoVideo = ({ categorias, actualizarVideos }) => {
  return (
    <>
      <Header />

      <main className="py-14 bg-blackDark">
        <FormVideo
          titulo="Nuevo Video"
          categorias={categorias}
          actualizarVideos={actualizarVideos}
        />
        <div id='alerta'></div>
      </main>

      <Footer />
    </>
  );
};

export default NuevoVideo; 