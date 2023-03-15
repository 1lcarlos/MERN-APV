import { useState } from "react";
const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  return(<>
    <div>
      <h1 className=" text-indigo-600 font-black text-6xl">
        Restablece tu password y no pierdas acceso a tus
        <span className=" text-black"> Pacientes</span>
      </h1>
    </div>
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
    </form>
  </>);
};

export default NuevoPassword;