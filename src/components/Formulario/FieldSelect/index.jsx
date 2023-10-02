
const FieldSelect = ({ categorias, setValue, required=false }) => {

  return (
    <select
      className={`bg-grayMedium rounded-md mb-5 w-full p-5 text-grayLight`}
      required={required}
      defaultValue="Categorias"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="Categorias" disabled>-- Categorías --</option>
      {categorias.map((categoria) => {
        return (
          <option
            className="hover:bg-primary"
            value={categoria.nombre}
            key={categoria.id}
          >
            {categoria.nombre}
          </option>
        );
      })}
    </select>
  );
};

export default FieldSelect;