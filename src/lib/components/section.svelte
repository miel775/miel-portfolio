<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

    export let title;
    export let content;


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MorphSVGPlugin)

// onMount(() => {
// 	gsap.to('.general-section', {
// 			y: 100,
//             x: -100,
// 			duration: 5,
//             borderRadius: '0px',
//             width: '1580px',
//             height: '500px'
// 	});


// });
</script>

<section>
  <h2>{title}</h2>
  <p>{content}</p>
</section>
