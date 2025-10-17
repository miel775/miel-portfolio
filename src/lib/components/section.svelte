<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

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

<section class="general-section">
    <h2>Portfolio</h2>
</section>


<style>

#svg-2{
  visibility: hidden;
}

</style>