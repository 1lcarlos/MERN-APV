import express from "express";
import {
  agregarPredio,
  obtenerPredios,
  obtenerPredio,
  actualizarPredio,
  eliminarPredio,
} from "../controllers/predioControllers.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, agregarPredio)
  .get(checkAuth, obtenerPredios);

router
  .route("/:id")
  .get(checkAuth, obtenerPredio)
  .put(checkAuth, actualizarPredio)
  .delete(checkAuth, eliminarPredio);

export default router;
