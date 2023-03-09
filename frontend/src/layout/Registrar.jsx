import { useState } from "react";
import { Link } from "react-router-dom";
const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      console.log("Hay campos vacios");
      return;
    }
    if (password !== repetirPassword) {
      console.log("Los password son diferentes");
      return;
    }
    if (password.length < 6) {
      console.log("EL password es muy corto, debe tener mas de 6 caracteres");
      return;
    }
    console.log("Despues del if");
  };
  return (
    <>
      <div>
        <h1 className=" text-indigo-600 font-black text-6xl">
          Crea tu Cuenta y Administra tus
          <span className=" text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white ">
        <form onSubmit={handleSubmit} action="">
          <div className="my-5">
            <label
              className=" uppercase text-gray-600 block text-xl font-bold "
              htmlFor=""
            >
              Nombre
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
              type="text"
              placeholder="Nombre del Usuario"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className=" uppercase text-gray-600 block text-xl font-bold "
              htmlFor=""
            >
              Email
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
              type="email"
              placeholder="Email de registro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className=" uppercase text-gray-600 block text-xl font-bold "
              htmlFor=""
            >
              Password
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className=" uppercase text-gray-600 block text-xl font-bold "
              htmlFor=""
            >
              Confirmar Password
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
              type="password"
              placeholder="Repite tu Password"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
            className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase
            font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto "
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-around">
          <Link className="block text-center my-5 text-gray-500" to="/">
            ¿Ya tienes una cuenta? Inicia Sesion
          </Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to="/olvide-password"
          >
            Olvide mi Password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
