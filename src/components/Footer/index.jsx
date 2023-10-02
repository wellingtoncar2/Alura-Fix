import Logo from "../Logo";
import Button from "../Buttons";
import { Link } from "react-router-dom";


const Footer = ({ mostrarBotonDescripcion = true}) => {
  return (
    <>
      {!mostrarBotonDescripcion ? (
        <Link to={"/nuevoVideo"}>
          <Button bgColor="bg-blue-500" hover="hover:bg-blue-600" valor="Nuevo Video" />
        </Link>
      ) : (
        <footer className="bg-black flex flex-col justify-center items-center py-5">
          <Logo />
          <p className="text-gray-500 text-[15px] mt-[15px]">
            Site hecho en <span className="text-gray-100">#challenge</span> de {" "}
            <span className="text-blue-500">Alura Latam</span>
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;