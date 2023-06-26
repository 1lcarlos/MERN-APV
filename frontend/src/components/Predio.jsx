import usePredios from "../Hooks/usePredios";
const Predio = ({ predio }) => {
  const { setEdicion } = usePredios();
  const { tipo, oferta, fechaIngreso, _id } = predio;
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  return (
    <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold uppercase text-indigo-700">
        Tipo:{" "}
        <span className=" font-normal normal-case text-black">{tipo}</span>
      </p>
      <p className=" font-bold uppercase text-indigo-700">
        Oferta:{" "}
        <span className=" font-normal normal-case text-black">{oferta}</span>
      </p>
      <p className=" font-bold uppercase text-indigo-700">
        Fecha Captura Dato:{" "}
        <span className=" font-normal normal-case text-black">
          {formatearFecha(fechaIngreso)}
        </span>
      </p>
      <div className=" flex justify-between my-5">
        <button
          type="button"
          className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={()=> setEdicion(predio)}
        >
          Editar
        </button>

        <button
          type="button"
          className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Predio;
