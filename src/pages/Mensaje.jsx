import Left_Menu from "./components/Left_Menu/Left_Menu";

import { ReactComponent as Svg_Configuracion } from '../img/svg_configuracion.svg';
import { ReactComponent as Svg_Crear_Mensaje } from '../img/svg_crear_mensaje.svg';

import '../pages/css/Mensaje.css';

function Mensaje() {
    return (
        <>
            <Left_Menu />
            {/* content */}
            <div className="mensaje-content">
                <div className="mensaje-header">
                    <h3>Mensaje</h3>
                    <div className="mensaje-icons">
                        <Svg_Configuracion fill="#fff" width={20} height={20} />
                        <Svg_Crear_Mensaje fill="#fff" width={20} height={20} />
                    </div>

                </div>
                <div className="mensaje-body">
                    <h1>¡Te damos la bienvenida a tu bandeja de entrada!</h1>
                    <p>Envía una frase, comparte Tweets y mucho más con las conversaciones privadas entre tú y otras personas en Twitter.</p>
                    <button>Escribir un mensaje</button>
                </div>
            </div>
            {/* Right */}
            <div className="mensaje-right">
                <div className="mensaje-body  mensaje-body-right">
                    <h1>Selecciona un mensaje</h1>
                    <p>Elige entre tus conversaciones existentes, empieza una nueva o sigue participando.</p>
                    <button>Nuevo mensaje</button>
                </div>
            </div>
        </>
    );
}

export default Mensaje;