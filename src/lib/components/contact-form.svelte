<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
    import Bottle from '$lib/assets/svg/bottle.svelte'

    let { title } = 'Contact'
    let { content } = "Would you like to get in touch with me? You can fill up the form here"

</script>

<div id="contact-form-section">

   <div id="container-1">
    <Bottle />
  </div>

  <div id="container-2">
    <h2> { title } </h2>
    <p> { content } </p>
<form id="contact-form">
  <div id="form-group">
    <label for="first-name">First Name</label>
    <input id="first-name" name="firstName" type="text" placeholder="Enter your first name" required>
  </div>

  <div id="form-group">
    <label for="last-name">Last Name</label>
    <input id="last-name" name="lastName" type="text" placeholder="Enter your last name" required>
  </div>

  <div id="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" placeholder="Tell me your story..." required></textarea>
  </div>

  <button type="submit">Send</button>
</form>
  </div>

</div>


<style>

#contact-form-section {
  margin-left: -6%;
  margin-right: -6%;
  background-color: var(--accent-color-1);
  padding: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 720px) {
      grid-template-columns: 1fr;
  }
}

#container-1 {
  display: flex;
  justify-content: center;
  padding: 2em;
}

#container-2 {
  padding: 2em;
}
</style>