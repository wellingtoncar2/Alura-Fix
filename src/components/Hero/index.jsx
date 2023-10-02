// import './Hero.css';
import Button from "../Buttons";
import { Link } from "react-router-dom";

export default ({ mostrarBotonDescripcion }) => {
  return (
    /* La clase hero esta definida en GlobalStyle.js  */
    <div className="bg-[url(/src/assets/hero.png)] bg-cover bg-center bg-no-repeat relative h-72 sm:h-[400px] md:h-[750px] hero">
      <div className="contenedor h-full flex flex-col items-center justify-end  pb-5 z-50 relative md:justify-center md:items-start pt-48">

        <h3 className="text-[35px] text-gray-300 mb-4 md:text-[46px] font-normal">
          Challenge React
        </h3>

        {mostrarBotonDescripcion || (
          <Link>
            <Button
              ancho="w-20"
              altura="h-10"
              key={Date.now()}
              valor="Ver más"
              bgColor="bg-white"
              textColor="text-black"
              textFont="text-[12px]"
              borderRounded="rounded-md"
              hover="hover:bg-gray-200"
            />
          </Link>
        )}

        {mostrarBotonDescripcion && (
          <p className="m-0 w-1/2 text-gray-200">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        )}
      </div>
    </div>
  );
};