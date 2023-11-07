import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xq0og8', 'template_1i56vcm', form.current, 'znDKZk05WF5HAl93J')
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yinproducciones@gmail.com</h5>
            <a href="mailto:yinproducciones@gmail.com" target='_blank'>Send email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/+5492944210930" target='_blank'>Send WhatsApp</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>yinproducciones@gmail.com</h5>
            <a href="https://m.me/emanueldavidmartinez" target='_blank'>Send message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact