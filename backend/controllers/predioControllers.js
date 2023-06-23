import Predio from "../models/Predio.js";
const agregarPredio = async (req, res) => {
  const predio = new Predio(req.body);
  predio.veterinario = req.veterinario._id;
  try {
    const predioGuardado = await predio.save();
    res.json(predioGuardado);
    console.log(predio);
  } catch (error) {
    console.log(error);
  }
};
const obtenerPredios = async (req, res) => {
  const predios = await Predio.find()
    .where("veterinario")
    .equals(req.veterinario);
  res.json(predios);
};
const obtenerPredio = async (req, res) => {
  const { id } = req.params;
  const predio = await Predio.findById(id);

  if (!predio) {
    return res.status(404).json({ msg: "Predio no encontrado" });
  }

  if (predio.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Accion no valida" });
  }
  res.json(predio);
};
const actualizarPredio = async (req, res) => {
  const { id } = req.params;
  const predio = await Predio.findById(id);
  if (!predio) {
    return res.status(404).json({ msg: "Predio no encontrado" });
  }

  if (predio.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Accion no valida" });
  }
  predio.tipo = req.body.tipo || predio.tipo;
  predio.frente = req.body.frente || predio.frente;
  predio.fondo = req.body.fondo || predio.fondo;
  predio.edad = req.body.edad || predio.edad;
  predio.area_terreno = req.body.area_terreno || predio.area_terreno;
  predio.area_construida = req.body.area_construida || predio.area_construida;
  predio.oferta = req.body.oferta || predio.oferta;
  predio.latitud = req.body.latitud || predio.latitud;
  predio.longitud = req.body.longitud || predio.longitud;
  predio.direccion = req.body.direccion || predio.direccion;
  predio.contacto = req.body.contacto || predio.contacto;
  predio.telefono = req.body.telefono || predio.telefono;
  predio.web = req.body.web || predio.web;
  predio.fechaIngreso = req.body.fechaIngreso || predio.fechaIngreso;

  try {
    const predioActualizado = await predio.save();
    res.json(predioActualizado);
  } catch (error) {
    console.log(error);
  }
};
const eliminarPredio = async (req, res) => {
  const { id } = req.params;
  const predio = await Predio.findById(id);
  if (!predio) {
    return res.status(404).json({ msg: "Predio no encontrado" });
  }

  if (predio.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Accion no valida" });
  }
  try {
    await predio.deleteOne();
    res.json({ msg: "Predio eliminado" });
  } catch (error) {
    console.log(error);
  }
};
export {
  agregarPredio,
  obtenerPredios,
  obtenerPredio,
  actualizarPredio,
  eliminarPredio,
};
