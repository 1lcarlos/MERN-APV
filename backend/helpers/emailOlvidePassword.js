import nodemailer from "nodemailer";

const emailOvidePassword = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const { email, nombre, token } = datos;
  const info = await transporter.sendMail({
    from: "APV- Administrador de Pacientes de Veterinaria",
    to: email,
    subject: "Restablece tu password cuenta en APV",
    text: "Restablece tu password cuenta en APV",
    html: `<p>Hola: ${nombre}, Ha solicitado reestablecer un nuevo password</p>
     <p>Para confirmar debes dar en el siguiente enlace:</p>
     <a href = "${process.env.FRONTEND_URL}/olvide-password/${token}" >Recuperar Password</a>
     <p>Si no pediste recuperar tu password, ignora este mensaje</p>
     `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

export default emailOvidePassword;
