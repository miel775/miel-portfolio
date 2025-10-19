<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
    import Bottle from '$lib/assets/svg/bottle.svelte'

    let { title } = 'Contact'
    let { content } = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"

</script>

<div id="contact-form-section">

   <div id="container-1">
    <Bottle />
  </div>

  <div id="container-2">
    <h2> { title } </h2>
    <p> { content } </p>
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