import MiniBanner from '../components/MiniBanner';
import BottlePost from '../assets/library/bottlePost';
import '../stylesheets/contact.css';


function Contact() {
  return (
    <main>
      <MiniBanner title="Contact" />

      <div id="contact-section">
        <div id="contact">
        <BottlePost />

        <form action="submit.php" method="POST" id="contact-form">
          <label for="name">Naam:</label>
          <input type="text" id="name" name="name" required/>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required/>

          <label for="message">Bericht:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <div id="contact-form-button-area">
            <button id="contact-form-button" class="button" type="submit">Verstuur</button>
          </div>
        </form>

        </div>
      </div>

    </main>
  );
}

export default Contact;
