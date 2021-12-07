import img from "../img/logo192.png";

function EventsCards() {
  return (
    <div className="listaEvento">
      <div className="tarjeta_evento">
        <div className="img_lista_event">
          <img className="img_e" src={img} alt="" />
        </div>
        <div className="info_e">
          <p className="tarjeta_info_e">nombre:</p>
          <p className="tarjeta_info_e">usuario:</p>
          <p className="tarjeta_info_e">precio:</p>
        </div>
      </div>
      <div className="tarjeta_evento">
        <div className="img_lista_event">
          <img className="img_e" src={img} alt="" />
        </div>
        <div className="info_e">
          <p className="tarjeta_info_e">nombre:</p>
          <p className="tarjeta_info_e">usuario:</p>
          <p className="tarjeta_info_e">precio:</p>
        </div>
      </div>
      <div className="tarjeta_evento">
        <div className="img_lista_event">
          <img className="img_e" src={img} alt="" />
        </div>
        <div className="info_e">
          <p className="tarjeta_info_e">nombre:</p>
          <p className="tarjeta_info_e">usuario:</p>
          <p className="tarjeta_info_e">precio:</p>
        </div>
      </div>
      <div className="tarjeta_evento">
        <div className="img_lista_event">
          <img className="img_e" src={img} alt="" />
        </div>
        <div className="info_e">
          <p className="tarjeta_info_e">nombre:</p>
          <p className="tarjeta_info_e">usuario:</p>
          <p className="tarjeta_info_e">precio:</p>
        </div>
      </div>
    </div>
  );
}

export default EventsCards;
