import emailjs from 'emailjs-com';

const sendConfirmationEmail = (userEmail, token) => {
  const serviceId = 'service_57rsotr';
  const templateId = 'template_8fp6mat';
  const userId = 'YOUR_USER_ID';

  const templateParams = {
    user_email: userEmail,
    confirmation_link: `https://yourdomain.com/confirmation?token=${token}`
  };

  emailjs.send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.error('FAILED...', err);
    });
};

export default sendConfirmationEmail;
