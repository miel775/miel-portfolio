<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

    import Logo from '$lib/assets/svg/logo.svelte'
</script>

<footer>
    <div id="container-1">
        <Logo />
    </div>

    <div id="container-2">
        <p> Miel van Sleeuwen </p>
        <p> mielvansleeuwen@gmail.com </p>
        <p> +31 6 12345678 </p>
        <br>
        <p>Veghel, Netherlands</p>
    </div>

    <div id="container-3">
        <a href="https://www.linkedin.com/in/miel-van-sleeuwen-364766152/"> </a>
        <a href="https://github.com/miel775"> </a>
        <a href="https://www.youtube.com/@mhvs775/videos"> </a>
    </div>

</footer>

<style>
    footer {
        display: flex;
        margin: -6%;
        background-color: var(--neutral-color-light-1);
    }

    #container-3 {
     
        
        & a {
            display: inline-block;
            height: 1em;
            width: 1em;
            background-color: var(--neutral-color-light-4);

        }
    }
</style>