import { BrowserRouter, Routes, Route } from "react-router-dom";

import Left_Menu from "../components/Left_Menu/Left_Menu";
import Explorar from "../Explorar";
import Guardados from "../Guardados";
import Home from '../Home';
import Lista from "../Lista";
import Mensaje from "../Mensaje";
import Notificacion from '../Notificacion';
import Perfil from "../Perfil";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Notificacion" element={<Notificacion />} />
        <Route path="Guardados" element={<Guardados />} />
        <Route path="Lista" element={<Lista />} />
        <Route path="Mensaje" element={<Mensaje />} />
        <Route path="Perfil" element={<Perfil />} />
        <Route path="Explorar" element={<Explorar />} />
        {/* <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  );

}
export default Router;