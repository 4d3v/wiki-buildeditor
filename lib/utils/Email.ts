import nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';

export default class {
  constructor(
    dto: any,
    private from = dto.from,
    private to = dto.to,
    private subject = dto.subject,
    private message = dto.message,
    private buildEditorLink = dto.buildEditorLink || null,
    private errorType = dto.errorType || null
  ) {}

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_PROJ,
          pass: process.env.PASS_PROJ,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(html: string) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      html,
      text: htmlToText(html),
    };

    await this.newTransport()!.sendMail(mailOptions);
  }

  async sendPasswordReset() {
    const html = `<p>${this.message}</p>`;
    await this.send(html);
  }

  async sendReportBug() {
    const html = `<b>Build Editor Link: ${
      this.buildEditorLink && this.buildEditorLink
    }</b><br/><p>Error Type: ${this.errorType}</p><p>Message: ${
      this.message
    }</p>`;

    await this.send(html);
  }
}
