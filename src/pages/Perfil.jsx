import Left_Menu from "./components/Left_Menu/Left_Menu";
import Right_Menu from "./components/Right_Menu/Right_Menu";
import Tweet from './components/Tweet/Tweet'

import { ReactComponent as Svg_Volver } from '../img/svg_volver.svg';
import { ReactComponent as Svg_Cumple } from '../img/svg_cumple.svg';
import { ReactComponent as Svg_Calendario } from '../img/svg_calendario.svg';

import '../pages/css/Perfil.css';
import Perfil_Nav_Seguir from "./components/Perfil_Nav_Seguir/Perfil_Nav_Seguir";

function Perfil() {

  return (
    <>
      <Left_Menu />
      {/* content */}
      <div className="perfil-content">
        {/* header */}
        <div className="perfil-header">
          <Svg_Volver fill="#fff" width={20} height="20" />
          <div className="perfil-header-info">
            <h3>Jose lara</h3>
            <span>0 Tweets</span>
          </div>
        </div>
        {/*  */}
        <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user imagen" className="perfil-fondo" />
        {/* user */}
        <div className="perfil-body">
          <div className="perfil-conf">
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="usuario" />
            <button>Configurar perfil</button>
          </div>
          <div className="perfil-user">
            <b>Jose Lara</b>
            <span>@Jose</span>
            {/* fecha */}
            <div className="perfil-fecha">
              <div className="pefil-fecha-icon">
                <Svg_Cumple fill="#71767b" width={18} height={18} />
                <p>Fecha de nacimiento: 2 de mayo de 1997</p>
              </div>
              <div className="pefil-fecha-icon">
                <Svg_Calendario fill="#71767b" width={18} height={18} />
                <p>Se unió en noviembre de 2019</p>
              </div>
            </div>

            {/*  saeguidores */}
            <div className="perfil-seguidores">

              <div className="perfil-seguidores-user">
                <b>100</b>
                <span>Siguiendo</span>
              </div>

              <div className="perfil-seguidores-user">
                <b>70</b>
                <span>Seguidores</span>
              </div>

            </div>
          </div>
        </div>

        {/* nav */}
        <div className="perfil-nav-content">
          {/* nav */}
          <ul className="perfil-nav-lista">
            <li className="perfil-nav-item">Tweets</li>
            <li className="perfil-nav-item">Tweets y respuestas</li>
            <li className="perfil-nav-item">Fotos y videos</li>
            <li className="perfil-nav-item">Me gusta</li>
          </ul>
          {/* content nav */}
          <div className="perfil-nav-seguir">
            <h3>A quién seguir</h3>
            <Perfil_Nav_Seguir />
            <Perfil_Nav_Seguir />

          </div>
        </div>
        
      </div>
      {/* Right */}
      <Right_Menu />
    </>
  );
}

export default Perfil;