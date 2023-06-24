import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailOvidePassword from "../helpers/emailOlvidePassword.js";
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

    //Enviar email
    emailRegistro({
      email,
      nombre,
      token: veterinarioGuardado.token,
    });

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  const { veterinario } = req;
  res.json({ veterinario });
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
    usuario.token = generarJWT(usuario.id)
    res.json({
      _id : usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario.id)

    });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};
const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const existeVeterinario = await Veterinario.findOne({ email });
  if (!existeVeterinario) {
    const error = new Error("El ususario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeVeterinario.token = generarId();
    await existeVeterinario.save();

    //Enviar email para recuperar password
    emailOvidePassword({
      email,
      nombre: existeVeterinario.nombre,
      token: existeVeterinario.token,
    });

    res.json({ msg: "Se ha enviado un email con las instrucciones" });
  } catch (error) {
    console.log(error);
  }
};
const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Veterinario.findOne({ token });
  if (tokenValido) {
    //token y usuaro valido
    res.json({ msg: "Token valido y usuario existe" });
  } else {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }
};
const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const veterinario = await Veterinario.findOne({ token });
  if (!veterinario) {
    const error = new Error("Se ha presentaado un error");
    return res.status(400).json({ msg: error.message });
  }
  try {
    veterinario.token = null;
    veterinario.password = password;
    await veterinario.save();
    return res.json({ msg: "Password modificado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
};
