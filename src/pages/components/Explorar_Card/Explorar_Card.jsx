import './Explorar_Card.css'
function Explorar_Card(props) {
    return (
        <div className="explorar-content-card">
            <div className="explorar-content-info">
                <span>{props.titulo}</span>
                <b>{props.resumen}</b>
            </div>
            <img src={props.img} alt="imagen" className="ex-content-info-img" />
        </div>
    );
}

export default Explorar_Card;