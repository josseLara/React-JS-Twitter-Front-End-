import { ReactComponent as Svg_Configuracion } from '../img/svg_configuracion.svg';
import { ReactComponent as Svg_Conf } from '../img/svg_conf.svg';

import Left_Menu from "../components/Left_Menu/Left_Menu";
import Right_Menu from "../components/Right_Menu/Right_Menu";

import './css/Explorar.css'
import Explorar_Card from '../components/Explorar_Card/Explorar_Card';
function Explorar() {
    return (
        <>
            <Left_Menu />
            {/* explorar */}
            <section className="explorar">
                {/* head */}
                <div className="explorar-head">
                    <form action="#" method="post">
                        <input
                            type="search"
                            name="search"
                            className="search-field"
                            placeholder="Buscar en twitter"
                        />
                    </form>
                    <Svg_Configuracion fill="#fff" width={20} height={20} />
                </div>
                {/* nav */}
                <div className="explorar-nav">
                    <ul className="explorar-nav-lista">
                        <li className="explorar-nav-item">Para ti</li>
                        <li className="explorar-nav-item">Tendencias</li>
                        <li className="explorar-nav-item">Noticias</li>
                        <li className="explorar-nav-item">Deportes</li>
                        <li className="explorar-nav-item">Entretenimiento</li>
                        <li className="explorar-nav-item">COVID-19</li>
                    </ul>
                </div>
                {/* content */}
                <div className="explorar-content">
                    <div className="explorar-content-resum">
                        <div className="explorar-content-sobre">
                            <span>Tenis - Anoche</span>
                            <h2>Roger Federer se despide del tenis en la Laver Cup</h2>
                            <span>Tendencias sobre Tiafoe</span>
                        </div>
                    </div>
                    {/* ten */}
                    <div className="explorar-content-ten">
                        <div className="explorar-content-tenden">
                            <span>Tendencia en EEUU</span>
                            <b>Rurouni Kenshin</b>
                            <span>74,8 mil Tweets</span>
                        </div>
                        <Svg_Conf fill="#fff" width={18} height={18} />
                    </div>
                    {/* card */}
                    <Explorar_Card
                        titulo="Guerra en Ucrania · EN DIRECTO"
                        resumen="Rusia comienza su mayor campaña de reclutamiento desde la Segunda Guerra Mundial"
                        img="https://pbs.twimg.com/semantic_core_img/1573123218625503234/L8WDD2aT?format=jpg&name=small" />

                    <Explorar_Card
                        titulo="Noticias Mundiales · EN DIRECTO"
                        resumen="Al menos 35 fallecidos en Irán durante protestas por muerte de una joven tras ser detenida por uso “inapropiado” del hiyab"
                        img="https://pbs.twimg.com/semantic_core_img/1573811115720675328/2e29O-X5?format=jpg&name=small" />

                </div>
            </section>

            {/* right */}
            <Right_Menu />
        </>
    );
}

export default Explorar;