import Header from "../components/Header";
import Footer from "../components/Footer";
import FormNuevaCategoria from "../components/Formulario/FormNuevaCategoria";


const NuevaCategoria = ({ actualizarCategorias, categorias }) => {
  return (
    <>
      <Header />

      <main className="py-14 bg-blackDark">
        <FormNuevaCategoria
          titulo="Nueva Categoría"
          actualizarCategorias={actualizarCategorias}
          categorias={categorias}
        />
      </main>
      <Footer />
    </>
  );
};

export default NuevaCategoria;
