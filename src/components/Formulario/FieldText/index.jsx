
const FieldText = ({
  label = "titulo",
  tipo = "text",
  borderNone = "",
  value = "",
  setValue,
  required = false,
  validarFormulario = () => true,
}) => {

  return (
    <div
      className={`bg-grayMedium flex flex-col rounded-md mb-5 md:mb-8 border-b-8 border-primary border-solid pb-2 ${borderNone}`}
    >
      <label className="text-grayLight text-[12px] py-2 px-5">{label}</label>
      <input
        type={tipo}
        className="bg-grayMedium w-full border-none outline-none px-5 text-grayLight text-[14px]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={(e) => {
          const validar = validarFormulario(e.target.value);
          const div = e.target.parentElement;

          if (validar) {
            div.classList.add("border-primary");
            div.classList.remove("border-errorDark");
          } else {
            div.classList.remove("border-primary");
            div.classList.add("border-errorDark");
          }
        }}
        required={required}
      />
    </div>
  );
};

export default FieldText;