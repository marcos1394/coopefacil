// src/utils/email.js
import emailjs from 'emailjs-com';

const sendConfirmationEmail = (email, token) => {
  emailjs.send('service_id', 'template_id', { email, token }, 'user_id')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    }, (err) => {
      console.error('Failed to send email.', err);
    });
};

export default sendConfirmationEmail;
