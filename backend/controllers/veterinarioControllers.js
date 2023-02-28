import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
const registrar = async (req, res) => {
  const { nombre, email, password } = req.body;

  //prevnir duplicados
  const existeUsuario = await Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  const { veterinario } = req;
  res.json({ perfil: veterinario });
};
const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({ token });
  if (!usuarioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }
  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "usuario confirmado exitosamente" });
  } catch (error) {
    console.log(error);
  }
};
const autenticar = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Veterinario.findOne({ email });
  //se comprueba si el usuario existe
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }
  //se comprueba si el usuario ha confirmado su email
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }
  //Revisar el password
  if (await usuario.comprobarPassword(password)) {
    //autenticar
    res.json({ token: generarJWT(usuario.id) });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};
const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const exiteVeterinario = await Veterinario.findOne({ email });
  if (!exiteVeterinario) {
    const error = new Error("El ususario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    exiteVeterinario.token = generarId();
    await exiteVeterinario.save();
    res.json({msg:"Se ha enviado un email con las instrucciones"})
  } catch (error) {
    console.log(error)
  }
};
const comprobarToken = (req, res) => {};
const nuevoPassword = (req, res) => {};

export {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
};
