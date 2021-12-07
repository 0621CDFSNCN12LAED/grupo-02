function information(props) {
  return (
    <div className="contenedor_info">
      <div className="contenedor_usuarios">
        <p className="lec_info">{props.users}</p>
      </div>
      <div className="contenedor_eventos">
        <p className="lec_info">{props.events}</p>
      </div>
      <div className="contenedor_categoria_uno">
        <p className="lec_info">
          Actualmente hay 200 usuarios con categoria comprador
        </p>
      </div>
      <div className="contenedor_categoria_dos">
        <p className="lec_info">
          Actualmente hay 200 usuarios con categoria vendedor
        </p>
      </div>
    </div>
  );
}

export default information;
