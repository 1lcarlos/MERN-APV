import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>
        <h1 className=" text-indigo-600 font-black text-6xl">
          Inicia Sesion y Administra tus
          <span className=" text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 ">
        <form action="">
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
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase
            font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto "
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-around">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/registrar"
          >
            ¿No tienes una cuenta? Registrate
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

export default Login;
