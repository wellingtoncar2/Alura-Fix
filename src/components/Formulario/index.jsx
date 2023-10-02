import { Link, useNavigate } from "react-router-dom";
import FieldText from "./FieldText";
import FieldArea from "./FieldArea";
import FieldSelect from "./FieldSelect";
import Button from "../Buttons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormVideo = ({ titulo, categorias, actualizarVideos}) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [imagenVideo, setImagenVideo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");

  function validarFormulario(texto) {
   const regex = /^(?:https?:\/\/)?[\w\-_]+(?:\.[\w\-_]+)+(?::\d+)?(?:\/\S*)?$/;

    if (regex.test(texto)) {
      return true;
    } else {
      return false;
    }
  }

  const removerAlerta = (contenedor) => {

    if (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  }

  const alerta = (tipo = "error", mensaje = "Error") => {
    const alerta = document.querySelector('#alerta');
    const parrafo = document.createElement('p');

    removerAlerta(alerta);
    parrafo.classList.add('p-4', 'mt-10', 'w-[90%]', 'max-w-[1000px]', 'mx-auto', 'text-grayLight', 'uppercase', 'font-normal', 'text-center', 'rounded-md');
  
    if (tipo === "error") {
      parrafo.classList.add('bg-red-700');
    } else {
      parrafo.classList.add('bg-green-700');
    }

    parrafo.textContent = mensaje;

    alerta.appendChild(parrafo);

    setTimeout(() => {
      parrafo.remove();
    }, 5000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      categoria === "" ||
      descripcion === "" ||
      !validarFormulario(link) ||
      !validarFormulario(imagenVideo)
    ) {
      return alerta("error", "Ingrese datos validos");
    }

    const objVideo = {
      title,
      link,
      imagenVideo,
      categoria,
      descripcion,
      codigoSeguridad,
      id: uuidv4(),
    };

    actualizarVideos(objVideo);

    alerta("correct", "Datos ingresados correctamente");

    setTitle('');
    setLink('');
    setImagenVideo('');
    setCategoria('');
    setDescripcion('');
    setCodigoSeguridad('');
  }

    return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="contenedor">
        <h2 className="text-grayLight text-[60px] text-center mb-[50px] font-normal">
          {titulo}
        </h2>

        <div className="max-w-[1000px] mx-auto">
          <FieldText
            label="Titulo"
            tipo="text"
            value={title}
            setValue={setTitle}
            required={true}
          />
          <FieldText
            label="Link del video"
            tipo="text"
            required={true}
            value={link}
            setValue={setLink}
            validarFormulario={validarFormulario}
          />
          <FieldText
            label="Link imagen del video"
            tipo="text"
            required={true}
            value={imagenVideo}
            setValue={setImagenVideo}
            validarFormulario={validarFormulario}
          />
          <FieldSelect
            categorias={categorias}
            setValue={setCategoria}
            required={true}
          />
          <FieldArea
            label="Descripción"
            value={descripcion}
            setValue={setDescripcion}
            required={true}
          />
          <FieldText
            label="Código de Seguridad"
            tipo="text"
            borderNone={"border-none"}
            value={codigoSeguridad}
            setValue={setCodigoSeguridad}
          />

          <div className="flex justify-between gap-5">
            <div className="flex gap-5 justify-center w-full md:w-auto">
              <Button
                valor="Guardar"
                bgColor="bg-primary"
                ancho="w-[180px]"
                borderRounded="rounded-md"
                type="submit"
              />
              <Button
                valor="Limpiar"
                bgColor="bg-grayDark"
                ancho="w-[180px]"
                borderRounded="rounded-md"
                type="reset"
              />
            </div>

            <Link to={"/nuevaCategoria"}>
              <Button
                valor="NuevaCategoria"
                bgColor="bg-primary"
                ancho="w-[254px]"
                estilos="hidden md:block"
                borderRounded="rounded-md"
                type="button"
              />
            </Link>
          </div>{" "}
        </div>
      </div>
    </form>
  );
};

export default FormVideo;
