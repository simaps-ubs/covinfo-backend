import Mail from '../../lib/Mail';

class ResetPassword {
  get key() {
    return 'ResetPassword';
  }

  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Equipe Covinfo <equipe@covinfo.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Seja Bem Vindo!',
      template: 'reset-password',
      context: {
        name: user.name,
        link: `localhost:3000/reset_password?userId=${user.id}`,
      },
    });
  }
}

export default new ResetPassword();
