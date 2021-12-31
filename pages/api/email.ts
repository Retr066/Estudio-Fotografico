// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Props } from "../../Interfaces/Email";
const mail = require("@sendgrid/mail");
type Data = {
  status: string;
};
console.log(process.env.SENDGRID_API_KEY);
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const message = `
  Nombres:${body.nombres}\r\n
  Apellidos:${body.apellidos}\r\n
  Email:${body.email}\r\n
  Telefono:${body.telefono}\r\n
  mensaje:${body.mensaje}\r\n
  `;

  const data = {
    to: "jherson.lopez88@gmail.com",
    from: "jherson.lopez85@gmail.com",
    subject: "Nuevo mensaje Pagina Web",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.send(data);
  res.status(200).json({ status: "Ok" });
}
