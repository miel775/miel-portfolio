<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

    // import all the shapes
    import ShapeOne from '$lib/assets/background/shape-1.svelte'
    import ShapeTwo from '$lib/assets/background/shape-2.svelte'
    import ShapeThree from '$lib/assets/background/shape-3.svelte'
    import ShapeFour from '$lib/assets/background/shape-4.svelte'
    import ShapeFive from '$lib/assets/background/shape-5.svelte'

</script>

<div id="background">
    <ShapeOne/>
    <ShapeTwo />
    <ShapeThree />
    <ShapeFour />
    <ShapeFive />
</div>

<style>
    #background {
        background-color: var(--primary-color);
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        right: 0;
        top: 0;
        overflow: hidden;
        z-index: -1;
    }
</style>


