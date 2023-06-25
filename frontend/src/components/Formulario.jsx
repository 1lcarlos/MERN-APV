import { useState } from "react";
import Alerta from "./Alerta";

const Formulario = () => {
  const [tipo, setTipo] = useState("");
  const [frente, setFrente] = useState("");
  const [fondo, setFondo] = useState("");
  const [edad, setEdad] = useState("");
  const [area_terreno, setArea_terreno] = useState("");
  const [area_construida, setArea_construida] = useState("");
  const [oferta, setOferta] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contacto, setContacto] = useState("");
  const [telefono, setTelefono] = useState("");
  const [web, setWeb] = useState("");
  const [fechaIngreso, setfechaIngreso] = useState(Date.now());

  const [alerta, setAlerta] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    //validacion formulario
    if ([tipo, oferta, fechaIngreso].includes("")) {
      setAlerta({
        msg: "Los campos con asterisco son obligatorios",
        error: true,
      });
      setTimeout(() =>{
        setAlerta({});
      }, 3000)
      return;
    }
  };
  const { msg } = alerta;
  return (
    <>
      <p className=" text-lg text-center mb-10">
        Añade tus predios y{" "}
        <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>
      
      <form        
        className=" bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className=" mb-5">
          <label htmlFor="tipo" className=" text-gray-700 uppercase font-bold">
            Tipo*
          </label>
          <input
            id="tipo"
            type="text"
            placeholder="Casa o apartamento"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={tipo}
            onChange={e => setTipo(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="frente"
            className=" text-gray-700 uppercase font-bold"
          >
            frente
          </label>
          <input
            id="frente"
            type="number"
            step="0.01"
            pattern="^\d+(.\d{1,2})?$"
            placeholder="Medida del Frente"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={frente}
            onChange={e => setFrente(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="fondo" className=" text-gray-700 uppercase font-bold">
            fondo
          </label>
          <input
            id="fondo"
            type="number"
            step="0.01"
            pattern="^\d+(.\d{1,2})?$"
            placeholder="Medida del Fondo"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fondo}
            onChange={e => setFondo(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="edad" className=" text-gray-700 uppercase font-bold">
            edad
          </label>
          <input
            id="edad"
            type="number"
            placeholder="Edad de la construcción"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={edad}
            onChange={e => setEdad(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="area terreno"
            className=" text-gray-700 uppercase font-bold"
          >
            area terreno
          </label>
          <input
            id="area_terre"
            type="number"
            step="0.01"
            pattern="^\d+(.\d{1,2})?$"
            placeholder="Area del Terreno"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={area_terreno}
            onChange={e => setArea_terreno(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="area de la construccion"
            className=" text-gray-700 uppercase font-bold"
          >
            area de la construccion
          </label>
          <input
            id="area_const"
            type="number"
            step="0.01"
            pattern="^\d+(.\d{1,2})?$"
            placeholder="Area de la Construccion"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={area_construida}
            onChange={e => setArea_construida(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="oferta"
            className=" text-gray-700 uppercase font-bold"
          >
            oferta*
          </label>
          <input
            id="oferta"
            type="number"
            placeholder="oferta"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={oferta}
            onChange={e => setOferta(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="latitud"
            className=" text-gray-700 uppercase font-bold"
          >
            latitud
          </label>
          <input
            id="latitud"
            type="number"
            step="0.0001"
            pattern="^\d+(.\d{1,4})?$"
            placeholder="latitud"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={latitud}
            onChange={e => setLatitud(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="longitud"
            className=" text-gray-700 uppercase font-bold"
          >
            longitud
          </label>
          <input
            id="longitud"
            type="number"
            step="0.0001"
            pattern="^\d+(.\d{1,4})?$"
            placeholder="longitud"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={longitud}
            onChange={e => setLongitud(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="direccion"
            className=" text-gray-700 uppercase font-bold"
          >
            direccion
          </label>
          <input
            id="direccion"
            type="text"
            placeholder="direccion"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="contacto"
            className=" text-gray-700 uppercase font-bold"
          >
            contacto
          </label>
          <input
            id="contacto"
            type="text"
            placeholder="contacto"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={contacto}
            onChange={e => setContacto(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="telefono"
            className=" text-gray-700 uppercase font-bold"
          >
            telefono
          </label>
          <input
            id="telefono"
            type="text"
            placeholder="telefono"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="web" className=" text-gray-700 uppercase font-bold">
            web
          </label>
          <input
            id="web"
            type="text"
            placeholder="web"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={web}
            onChange={e => setWeb(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="fecha captura del dato"
            className=" text-gray-700 uppercase font-bold"
          >
            fecha captura del dato*
          </label>
          <input
            id="fecha"
            type="date"           
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaIngreso}
            onChange={e => setfechaIngreso(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Predio"
        />
      </form>
      {msg && <Alerta alerta={alerta}/>}
    </>
  );
};

export default Formulario;
