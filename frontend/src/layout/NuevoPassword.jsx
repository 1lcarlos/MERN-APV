import { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import { useParams } from "react-router-dom";
import clienteAxios from "../config/axios";
const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({
          msg: "Escribe tu nuevo Password",
        });
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: "hubo un error con el enlace",
          error: true,
        });
      }
    };
    comprobarToken();
  });
  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className=" text-indigo-600 font-black text-6xl">
          Restablece tu password y no pierdas acceso a tus
          <span className=" text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {tokenValido && (
          <form action="">
            <div className="my-5">
              <label
                className=" uppercase text-gray-600 block text-xl font-bold "
                htmlFor=""
              >
                Nuevo Password
              </label>
              <input
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                type="password"
                placeholder="Tu nuevo Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Guardar Nuevo Password"
              className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase
            font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto "
            />
          </form>
        )}
      </div>
    </>
  );
};

export default NuevoPassword;
