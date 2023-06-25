import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./layout/Login";
import Registrar from "./layout/Registrar";
import ConfirmarCuenta from "./layout/ConfirmarCuenta";
import OlvidePassword from "./layout/OlvidePassword";
import NuevoPassword from "./layout/NuevoPassword";
import AdministradorPredios from "./paginas/AdministradorPredios";
import { AuthProvider } from "./context/AuthProvider";
import { PrediosProvider } from "./context/PrediosProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrediosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route
                path="confirmar-cuenta/:id"
                element={<ConfirmarCuenta />}
              />
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministradorPredios />} />
            </Route>
          </Routes>
        </PrediosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
