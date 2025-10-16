<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

    // import all the shapes
    import ShapeOne from '$lib/assets/background/shape-1.svelte'


</script>

<div id="background">
    <ShapeOne/>
</div>

<style>
    #background {
        background-color: var(--primary-color);
        width: 100%;
        top: 0;
        left: 0;
        margin:0;
        position: absolute;
    }
</style>


