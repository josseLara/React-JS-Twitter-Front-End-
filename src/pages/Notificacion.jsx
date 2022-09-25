import { ReactComponent as Svg_Configuracion } from '../img/svg_configuracion.svg';
import { ReactComponent as Svg_NCard } from '../img/svg_ncard.svg';
import { ReactComponent as Svg_Conf } from '../img/svg_conf.svg';

import Left_Menu from './components/Left_Menu/Left_Menu';
import Right_Menu from './components/Right_Menu/Right_Menu';

import './css/Notificacion.css';
import Notificacion_Card from './components/Notificacion_Card/Notificacion_Card';
function Notificacion() {
    return (

        <>
            <Left_Menu></Left_Menu>
            {/* notificacion */}
            <section className="notificacion">
                {/* header */}
                <div className="header">
                    <div className="header-title">
                        <b>Notificaciones</b>
                        <Svg_Configuracion fill='#fff' width={25} height={25} />
                    </div>


                    <ul className="header-nav-list">
                        <li>
                            <a href="#inicio">Todas</a>
                        </li>
                        <li>
                            <a href="#">Menciones</a>
                        </li>
                    </ul>

                </div>
                <div className="noticacion-cards">
                    {/* cards */}
                    <Notificacion_Card
                        titulo="Por si te perdiste el Tweet de Jos"
                        resumen="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem quis dignissimos."
                        img="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                     <Notificacion_Card
                        titulo="Por si te perdiste el Tweet de Jos"
                        resumen="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem quis dignissimos."
                        img="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>
            </section>

            {/* menu right */}
            <Right_Menu></Right_Menu>
        </>


    );
}

export default Notificacion;