import './Left_Menu.css';

import { ReactComponent as Svg_Twitter } from '../../../img/svg_twitter.svg';
import { ReactComponent as Svg_Home } from '../../../img/svg_home.svg';
import { ReactComponent as Svg_Explorar } from '../../../img/svg_explorar.svg';
import { ReactComponent as Svg_Notificacion } from '../../../img/svg_notificacion.svg';
import { ReactComponent as Svg_Mensaj } from '../../../img/svg_mensaj.svg';
import { ReactComponent as Svg_Guardados } from '../../../img/svg_guardados.svg';
import { ReactComponent as Svg_Lista } from '../../../img/svg_lista.svg';
import { ReactComponent as Svg_User } from '../../../img/svg_user.svg';
import { ReactComponent as Svg_Mas } from '../../../img/svg_mas.svg';
import { ReactComponent as Svg_Conf } from '../../../img/svg_conf.svg';
import { ReactComponent as Svg_Home_Selected } from '../../../img/svg_home_seleted.svg';
import { ReactComponent as Svg_Explorar_Selected } from '../../../img/svg_explorar_selected.svg';
import { ReactComponent as Svg_notificacion_Selected } from '../../../img/svg_notificacion_selected.svg';
import { ReactComponent as Svg_Mensaje_Selected } from '../../../img/svg_mensaje_selected.svg';
import { ReactComponent as Svg_Guardado_Selected } from '../../../img/svg_guardado_selected.svg';
import { ReactComponent as Svg_Lista_Selected } from '../../../img/svg_lista_selected.svg';
import { ReactComponent as Svg_User_Selected } from '../../../img/svg_user_selected.svg';

import { ReactComponent as Svg_Twitter_Min } from '../../../img/svg_twitter_min.svg';

import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';



function Left_Menu() {

    const [iconoMenu, setIconoMenu] = useState( [0, 0, 0, 0, 0, 0] );

    return (
        <>
            <section className="left-menu">
                <span className="ico-twitter">
                    <Svg_Twitter fill='#fff' style={{ width: 50, height: 30 }} />
                </span>
                <ul className="menu">
                    <li onClick={() => remplaceIcon( 0 )}>
                        <Link to="/" style={{ textDecoration: 'none' }} ><span className="menu-link">
                            {!iconoMenu[0] ? <Svg_Home fill="#fff" width={26.25} height={26.25} /> : <Svg_Home_Selected fill="#fff" width={26.25} height={26.25} />}
                            <span className="label">Inicio</span>
                        </span></Link>
                    </li>
                    <li onClick={() => remplaceIcon( 1 )}>
                        <Link to="/Explorar" style={{ textDecoration: 'none' }}>
                            <span className="menu-link" >
                                {!iconoMenu[1] ? <Svg_Explorar fill="#fff" width={26.25} height={26.25} /> : <Svg_Explorar_Selected fill="#fff" width={26.25} height={26.25} />}
                                <span className="label">Explorar</span>

                            </span>
                        </Link>
                    </li>
                    <li onClick={() => remplaceIcon( 2 )}>
                        <Link to="/Notificacion" style={{ textDecoration: 'none' }}> <span className="menu-link" href="/Notificacion">
                            {!iconoMenu[2] ? <Svg_Notificacion fill="#fff" width={26.25} height={26.25} /> : <Svg_notificacion_Selected fill="#fff" width={26.25} height={26.25} />}
                            <span className="label">Notificaciones</span>
                        </span></Link>
                    </li>
                    <li onClick={() => remplaceIcon( 3 )}>
                        <Link to="/Mensaje" style={{ textDecoration: 'none' }}>
                            <span className="menu-link">
                                {!iconoMenu[3] ? <Svg_Mensaj fill="#fff" width={26.25} height={26.25} /> : <Svg_Mensaje_Selected fill="#fff" width={26.25} height={26.25} />}
                                <span className="label">Mensajes</span>
                            </span>
                        </Link>
                    </li>
                    <li onClick={() => remplaceIcon( 4 )}>
                        <Link to="/Guardados" style={{ textDecoration: 'none' }}>
                            <span className="menu-link" >
                                {!iconoMenu[4] ? <Svg_Guardados fill="#fff" width={26.25} height={26.25} /> : <Svg_Guardado_Selected fill="#fff" width={26.25} height={26.25} />}
                                <span className="label">Guardados</span>
                            </span>
                        </Link>
                    </li>
                    <li onClick={() => remplaceIcon( 5 )}>
                        <Link to="/Lista" style={{ textDecoration: 'none' }}>
                            <span className="menu-link" >
                                {!iconoMenu[5] ? <Svg_Lista fill="#fff" width={26.25} height={26.25} /> : <Svg_Lista_Selected fill="#fff" width={26.25} height={26.25} />}
                                <span className="label">Listas</span>
                            </span>
                        </Link>
                    </li>
                    <li onClick={() => remplaceIcon( 6 )}>
                        <Link to="/Perfil" style={{ textDecoration: 'none' }}>
                            <span className="menu-link">
                                {!iconoMenu[6] ? <Svg_User fill="#fff" width={26.25} height={26.25} /> : <Svg_User_Selected fill="#fff" width={26.25} height={26.25} />}
                                <span className="label">Perfil</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <span className="menu-link">
                            <Svg_Mas fill="#fff" width={26.25} height={26.25} />
                            <span className="label">Más opciones</span>
                        </span>
                    </li>
                </ul>
                <Outlet />
                <button className="big-button">
                    <Svg_Twitter_Min className="fas" fill="#fff" width={24} height={24} />
                    <span className="label">Twittear</span>
                </button>

                <div className="my-perfil">
                    <img className="my-perfil-img" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="my" />
                    <div className="my-perfil-info">
                        <b>Jos Lar</b>
                        <span>@JoseLar</span>
                    </div>
                    <Svg_Conf className="my-prefil-conf" fill="#fff" width={18.75} height={18.75} />
                </div>

            </section>
        </>
    );

    function remplaceIcon( i ) {
        switch ( i ) {
            case 0:
                setIconoMenu( [1, 0, 0, 0, 0, 0, 0] )
                break

            case 1:
                setIconoMenu( [0, 1, 0, 0, 0, 0, 0] )
                break

            case 2:
                setIconoMenu( [0, 0, 1, 0, 0, 0, 0] )
                break

            case 3:
                setIconoMenu( [0, 0, 0, 1, 0, 0, 0] )
                break

            case 4:
                setIconoMenu( [0, 0, 0, 0, 1, 0, 0] )
                break

            case 5:
                setIconoMenu( [0, 0, 0, 0, 0, 1, 0] )
                break

            case 6:
                setIconoMenu( [0, 0, 0, 0, 0, 0, 1] )
                break
        }


    }

}


export default Left_Menu;