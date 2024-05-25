/* eslint-disable import/no-anonymous-default-export */

import { createTransport } from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const token = "token";
      const chatId = "-chatId";

      const transporter = createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "dmitrykuzan@gmail.com",
          pass: "pass",
        },
        secure: true,
      });

      const messageEmail = `
          <p>Ім'я: <strong>${req.body.name || "—"}</strong></p>
          <p>Телефон: <strong>${req.body.tel || "—"}</strong></p>
        `;
      const messageTg = `
            Ім'я: ${req.body.name || "—"}%0AТелефон: ${req.body.tel || "—"}%0A
          `;
      const mailData = {
        from: "dmitrykuzan@gmail.com",
        to: "dmitrykuzan@gmail.com",
        text: `Заявка з сайту EpicStart від: ${req.body.name}`,
        html: messageEmail,
      };

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${messageTg}&parse_mode=HTML`;

      transporter.sendMail(mailData, async (err) => {
        if (err) {
          console.log("err", err);
          res.status(400).json(err);
          return;
        }

        await fetch(url);

        res.status(200).json({ message: "Success!" });
      });
    } catch (err) {
      console.log(err);
      res.status(401).json(err);
    }
  }
};
