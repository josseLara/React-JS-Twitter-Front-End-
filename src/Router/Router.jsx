import { BrowserRouter, Routes, Route } from "react-router-dom";

import Left_Menu from "../components/Left_Menu/Left_Menu";
import Explorar from "../pages/Explorar";
import Guardados from "../pages/Guardados";
import Home from '../pages/Home';
import Lista from "../pages/Lista";
import Mensaje from "../pages/Mensaje";
import Notificacion from '../pages/Notificacion';
import Perfil from "../pages/Perfil";

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