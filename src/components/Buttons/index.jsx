
const Button = ({
  valor = "Enviar",
  bgColor = "bg-transparent",
  textColor = "text-white",
  textFont = "text-[21px]",
  ancho = "w-full",
  altura = "h-14",
  border = "none",
  borderRounded = "none",
  hover = "",
  estilos = "",
  type = "button"
}) => {
  return (
    <button
      className={`${ancho} ${altura} ${bgColor} ${textColor} ${border} ${textFont} ${estilos} font-medium transition-all duration-300 ease-in-out cursor-pointer ${borderRounded} ${hover}`}
      type={type}
    >
      {valor}
    </button>
  );
};

export default Button;