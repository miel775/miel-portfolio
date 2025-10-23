<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
  import Bottle from '$lib/assets/svg/bottle.svelte';

  let title = 'Contact';
  let content = 'Would you like to get in touch with me? You can fill out the form here.';

  gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

  onMount(() => {
    gsap.from('#container-2', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact-form-section',
        start: 'top 85%',
      },
    });

    gsap.from('#container-1', {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact-form-section',
        start: 'top 85%',
      },
    });
  });
</script>

<div id="contact-form-section">
  <div id="container-1">
    <Bottle />
  </div>

  <div id="container-2">
    <h2>{title}</h2>
    <p>{content}</p>

    <form id="contact-form">
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input id="first-name" name="firstName" type="text" placeholder="Enter your first name" required />
      </div>

      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input id="last-name" name="lastName" type="text" placeholder="Enter your last name" required />
      </div>

      <div class="form-group full-width">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Tell me your story..." required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</div>

<style>
  #contact-form-section {
    margin-left: -6%;
    margin-right: -6%;
    background-color: var(--accent-color-1);
    padding: 5em 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3em;
    color: var(--text-color, #fff);
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 820px) {
    #contact-form-section {
      grid-template-columns: 1fr;
      text-align: center;
    }

    #container-1 {
      display: none; /* optional: hide bottle on small screens */
    }
  }

  #container-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #container-2 {
    padding: 2em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    backdrop-filter: blur(8px);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2em;
  }

  #contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .full-width {
    grid-column: 1 / 3;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  input,
  textarea {
    padding: 0.9em 1em;
    border: none;
    border-radius: 0.7em;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  input:focus,
  textarea:focus {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 2px var(--highlight-color, #00b4d8);
  }

  button {
    grid-column: 1 / 3;
    background: var(--highlight-color, #00b4d8);
    color: #fff;
    border: none;
    border-radius: 0.7em;
    padding: 0.9em;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 180, 216, 0.4);
  }
</style>
