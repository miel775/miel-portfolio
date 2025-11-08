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
    
    import GrainyFilter from '$lib/assets/background/GrainyFilter.svelte';

</script>

<div id="background">
    <ShapeOne/>
    <ShapeTwo />
    <ShapeThree />
    <ShapeFour />
    <ShapeFive />
</div>

<div id="grainy-bg">
<GrainyFilter/>
</div>


<style>
    #background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color:  var(--accent-color-2);
		overflow: hidden;
		z-index: -999;
    }

	#grainy-bg {
		position: fixed;
		top: 0;
        left: -50em;
		width: 200%;
		height: 100%;
		opacity: 0.9; 
		pointer-events: none; 
		z-index: -1; 
		mix-blend-mode: overlay;
		object-fit: cover;
	}
</style>


