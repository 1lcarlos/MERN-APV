import { Link } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const Header = () => {
    const {cerrarSesion} = useAuth();
  return (
    <header className=" py-10 bg-indigo-600">
        <div className=" container mx-auto flex flex-col lg:flex-row justify-around items-center">
            <h1 className=" font-bold text-2xl text-indigo-200 text-center" >
                Administrador de 
                {" "} 
                <span className=" text-white font-black">
                    Predios
                </span>
            </h1>
            <nav className=" flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to ="/admin" className=" text-white text-sm uppercase font-bold">Predios</Link>
                <Link to ="/perfil" className=" text-white text-sm uppercase font-bold">Perfil</Link>
                <button type="button" className="  text-white text-sm uppercase font-bold"
                onClick={cerrarSesion}>
                    Cerrar Sesion
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header