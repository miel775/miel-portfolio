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
        <input id="first-name" name="firstName" type="text" placeholder="First name" required />
      </div>

      <div class="form-group">
        <input id="last-name" name="lastName" type="text" placeholder="Last name" required />
      </div>

      <div class="form-group full-width">
        <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
      </div>

        <div class="form-group full-width">
        <input id="mail" name="mail" type="text" placeholder="Mail" required />
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
    gap: var(--gap);
    color: var(--neutral-color-1);
    overflow: hidden;
  }

  @media (max-width: 820px) {
    #contact-form-section {
      grid-template-columns: 1fr;
      text-align: center;
    }

    #container-1 {
      display: none;
    }
  }

  #container-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #container-2 {
    padding: 2em;
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
    font-family: 'Jersey 20';
    margin-bottom: 0.5em;
  }

  input,
  textarea {
    padding: 0.9em 1em;
    border: #0000 solid 1px;
    background: var(--accent-color-1-light-1);
    color: var(--neutral-color-1);
    transition: all 0.3s ease;
    color: var(--neutral-color-1);
    font-family: 'Jersey 20';
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--neutral-color-light-1);
    font-family: 'Jersey 20';
    font-size: 2em;
  }

  input:focus,
  textarea:focus {
    background: var(--accent-color-1-light-2);
    box-shadow: 0 0 0 2px var(--highlight-color, var(--accent-color-1));
  }

  button {
    font-family: 'Jersey 20';
    font-size: 1em;
    grid-column: 1 / 3;
    background: var(--pimary-color-light-1);
    color: #fff;
    border: none;
    padding: 0.9em;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  button:hover {
    transform: translateY(-2px);
  }
</style>
