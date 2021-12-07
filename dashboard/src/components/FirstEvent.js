import img from "../img/logo192.png";

function FirstEvent() {
  return (
    <div className="contenedor_evento">
      <div className="imagen_evento">
        <img className="imagen_de_evento" src={img} alt="" />
      </div>
      <div className="infromacion_evento">
        <p className="info_evento">nombre:</p>
        <p className="info_evento">provincia:</p>
        <p className="info_evento">localidad:</p>
        <p className="info_evento">direccion:</p>
        <p className="info_evento">fecha:</p>
        <p className="info_evento">hora de inicio:</p>
        <p className="info_evento">hora de finapzacion:</p>
        <p className="info_evento">precio de entrada:</p>
        <p className="info_evento">descripcion del evento:</p>
        <p className="info_evento">mas informacion:</p>
      </div>
    </div>
  );
}

export default FirstEvent;
