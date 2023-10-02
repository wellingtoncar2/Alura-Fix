
const ColumnCategoria = ({nombre, descripcion}) => {


  return (
    <tr>
      <td>{nombre}</td>
      <td>{descripcion}</td>
      <td>
        <button>Editar</button>
      </td>
      <td>
        <button>Remover</button>
      </td>
    </tr>
  );
};

export default ColumnCategoria;