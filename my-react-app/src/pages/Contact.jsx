import MiniBanner from '../components/MiniBanner';
import { useForm, ValidationError } from '@formspree/react';
import BottlePost from '../assets/library/bottlePost';
import '../stylesheets/contact.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xeerlpqr");
      if (state.succeeded) {
      return <p>Thanks for using</p>;
  }
    return (
        <form action="submit.php" method="POST" id="contact-form" onSubmit={handleSubmit}>

        <div id="names-form">
            <label for="first-name">First Name</label>
            <input type="text" id="name" name="name" placeholder="First Name" required/>

            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
          />

            <label for="last-name">Last Name</label>
            <input type="text" id="name" name="name" placeholder="Last Name" required/>

            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
          />
        </div>

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Email" required/>

          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" rows="4" required></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <div id="contact-form-button-area">
            <button type="submit" id="contact-form-button" class="button" disabled={state.submitting}>
              Send</button>
          </div>
        </form>
    )
}


function Contact() {
  return (
    <main>
      <MiniBanner title="Contact" />

      <div id="contact-section">
        <div id="contact">

        <div id="contact-bottle">
          <BottlePost />
        </div>
          <ContactForm />
        </div>
      </div>

    </main>
  );
}

export default Contact;
