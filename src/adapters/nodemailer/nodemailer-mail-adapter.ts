import { MailerAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "270b1ef024880f",
        pass: "34b91857ba9e87"
    }
});


export class NodemailerMailerAdapter implements MailerAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transporter.sendMail({
            from: "Equipe FeedGet <viniciuspoa2@gmail.com>",
            to: "Vinicius Pereira  <viniciuspoa2@gmail.com>",
            subject,
            html: body
        });
    }
}