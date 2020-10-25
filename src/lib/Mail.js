import nodemailer from 'nodemailer';

class Mail {
  constructor() {
    nodemailer.createTestAccount().then((account) => {
      this.transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
    });
  }

  async sendMail(msg) {
    const message = await this.transporter.sendMail(msg);
    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new Mail();
