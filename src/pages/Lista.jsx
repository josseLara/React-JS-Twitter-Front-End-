import Left_Menu from "./components/Left_Menu/Left_Menu";
import Right_Menu from "./components/Right_Menu/Right_Menu";

import "../pages/css/Lista.css"

import { ReactComponent as Svg_Conf } from '../img/svg_conf.svg';
import { ReactComponent as Svg_Lista_Nueva } from '../img/svg_lista_nueva.svg';
import { ReactComponent as Svg_Volver } from '../img/svg_volver.svg';

function Lista() {
    return (
        <>
            <Left_Menu></Left_Menu>
            <div className="lista">
                {/* head */}
                <div className="lista-header">
                    <Svg_Volver fill="#fff" width={30} height={30} />
                    <div className="lista-header-user">
                        <h3>Lista</h3>
                        <span>@Josef</span>
                    </div>
                    <div className="lista-header-icons">
                        <Svg_Lista_Nueva fill="#fff" width={30} height={30} />
                        <Svg_Conf fill="#fff" width={30} height={30} />
                    </div>
                </div>
                {/* content */}
                <div className="lista-content">
                    {/* title */}
                    <div className="lista-content-title">
                        <b>Listas fijadas</b>
                        <div className="lista-title-p">
                            <p>Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.</p>
                        </div>
                    </div>
                    {/* cards*/}
                    <div className="lista-content-body">
                        <b>Descubre Listas nuevas</b>
                        {/* card 1 */}
                        <div className="card-lista">
                            <div className="card-lista-content">
                                <img src="https://pbs.twimg.com/media/EXZ27UwVcAIcDfd?format=png&name=240x240" alt="" className="card-title-img" />
                                <div className="card-lista-user">
                                    <strong>Información con Opinión</strong>
                                    <div className="lista-user-info">
                                        <img src="https://pbs.twimg.com/profile_images/1355358438965059593/IKce6gAM_400x400.jpg" alt="users" />
                                        <b>RPD Noticias</b>
                                        <span>@RPDNoticias</span>
                                    </div>
                                </div>
                            </div>
                            <button className="card-lista-btn">Seguir</button>
                        </div>
                        {/* card 2 */}
                        <div className="card-lista">
                            <div className="card-lista-content">
                                <img src="https://pbs.twimg.com/media/EXZ2fFgVAAAnpYk?format=png&name=240x240" alt="" className="card-title-img" />
                                <div className="card-lista-user">
                                    <strong>Información con Opinión</strong>
                                    <div className="lista-user-info">
                                        <img src="https://pbs.twimg.com/profile_images/1355358438965059593/IKce6gAM_400x400.jpg" alt="users" />
                                        <b>RPD Noticias</b>
                                        <span>@RPDNoticias</span>
                                    </div>
                                </div>
                            </div>
                            <button className="card-lista-btn">Seguir</button>
                        </div>
                        {/* card 3 */}
                        <div className="card-lista">
                            <div className="card-lista-content">
                                <img src="https://pbs.twimg.com/media/EXZ2mJCUEAEbJb3?format=png&name=240x240" alt="" className="card-title-img" />
                                <div className="card-lista-user">
                                    <strong>Información con Opinión</strong>
                                    <div className="lista-user-info">
                                        <img src="https://pbs.twimg.com/profile_images/1355358438965059593/IKce6gAM_400x400.jpg" alt="users" />
                                        <b>RPD Noticias</b>
                                        <span>@RPDNoticias</span>
                                    </div>
                                </div>
                            </div>
                            <button className="card-lista-btn">Seguir</button>
                        </div>
                        {/*  */}
                        <a href="#">Mostrar más</a>
                        {/* sin lista  */}
                        <div className="lista-content-title">
                            <b>Tus Listas</b>
                            <div className="lista-title-p">
                                <p>No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.</p>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
            <Right_Menu></Right_Menu>
        </>
    )
}

export default Lista;