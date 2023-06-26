import usePredios from "../Hooks/usePredios";
import Predio from "./Predio";

const ListadoPredios = () => {
  const { predios } = usePredios();
 
  return (
    <>
      {predios.length ? (
        <>
          <h2 className=" font-black text-3xl text-center ">
            Listado de Predios
          </h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className=" text-indigo-600 font-bold">Predios</span>
          </p>
          {predios.map((predio) => (
            <Predio 
              key={predio._id} 
              predio={predio} 
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">No hay predios</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Comienza agregando tus predios{" "}
            <span className=" text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoPredios;
