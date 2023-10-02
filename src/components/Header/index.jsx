import Button from "../Buttons";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export default ({ mostrarBotonDescripcion = false }) => {

  return (
    <header className="bg-black py-5 border-b-4 border-b-blue-500">

      <div className="contenedor flex justify-center items-center md:justify-between">
        <Logo />
        {mostrarBotonDescripcion && (
          <Link to={"/nuevoVideo"}>
            <Button
              border="border border-solid border-white"
              ancho="w-44"
              valor="Nuevo Video"
              borderRounded="rounded-md"
              hover="hover:bg-blue-500 hover:border-none"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

