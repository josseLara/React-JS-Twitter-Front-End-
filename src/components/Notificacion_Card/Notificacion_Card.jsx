import './Notificacion_Card.css';
import { ReactComponent as Svg_NCard } from '../../img/svg_ncard.svg';
import { ReactComponent as Svg_Conf } from '../../img/svg_conf.svg';

function Notificacion_Card(props) {
    return (
        <div className="notificacion-card">
            <div className="notificacion-user">
                <div className="notificacion_info">
                    <Svg_NCard width={32} height={32} />
                    <img className="notificacion-user-img" src={props.img} alt="user" />
                </div>
                <Svg_Conf fill="#fff" width={20} height={20} />
            </div>
            {/* mensaje */}
            <div className="noificacion_mensaje">
                <span>{props.titulo}</span>
                <p>{props.resumen}</p>
            </div>
        </div>
    );
}

export default Notificacion_Card;