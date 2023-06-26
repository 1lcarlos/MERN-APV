import { useContext } from "react";
import PrediosContext from "../context/PrediosProvider";

const usePredios = () => {
  return useContext(PrediosContext);
};

export default usePredios;
