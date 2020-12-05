import { IMailProvider, IMessage} from "../IMailProvider";
import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
          host: 'smtp.mailtrap.io',
          port: 2525,
          auth: {
             user: '827f6bc3afb1a5',
             pass: '83d671f59da430'
          }
        })
      }

   

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
          to: {
            name: message.to.name,
            address: message.to.email,
          },
          from: {
            name: message.from.name,
            address: message.from.email,
          },
          subject: message.subject,
          html: message.body,
        })
      }
}