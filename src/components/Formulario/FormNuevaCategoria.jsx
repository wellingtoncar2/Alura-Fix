import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FieldText from "./FieldText";
import FieldArea from "./FieldArea";
import Button from "../Buttons";
import ColumnCategoria from "../ColumnCategoria";

const FormNuevaCategoria = ({ titulo, actualizarCategorias, categorias }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState("#FFBA05");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");

  return (
    <div className="contenedor">
      <h2 className="text-grayLight text-[60px] text-center mb-[50px] font-normal">
        {titulo}
      </h2>

      <form
        className="max-w-[1000px] mx-auto"
        onSubmit={(e) => {
          e.preventDefault();

          const objCategorias = {
            nombre,
            color,
            descripcion,
            codigoSeguridad,
            id: uuidv4(),
          };

          actualizarCategorias(objCategorias);
        }}
      >
        <FieldText
          label="Nombre"
          borderNone="border-none"
          tipo="text"
          value={nombre}
          setValue={setNombre}
        />
        <FieldArea
          label="Descripción"
          value={descripcion}
          setValue={setDescripcion}
        />
        <FieldText
          label="Color"
          borderNone="border-none"
          tipo="color"
          value={color}
          setValue={setColor}
        />
        <FieldText
          label="Código de Seguridad"
          borderNone="border-none"
          tipo="text"
          value={codigoSeguridad}
          setValue={setCodigoSeguridad}
        />

        <div className="flex justify-between gap-5">
          <div className="flex gap-5 justify-between w-full md:w-auto">
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
        </div>
      </form>

      <div className="max-w-[1000px] mx-auto">
        <table className="tabla-categorias">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {
              categorias.map((categoria => {
                return <ColumnCategoria
                  key={categoria.id}
                  nombre={categoria.nombre}
                  descripcion={categoria.descripcion}
                />
              }))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormNuevaCategoria;