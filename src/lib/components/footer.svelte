<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { library, icon } from '@fortawesome/fontawesome-svg-core'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

    import Logo from '$lib/assets/svg/logo.svelte'

    import Camera from '$lib/assets/svg/camera.svelte'
    import Linkedin from '$lib/assets/svg/linkedin.svelte'
    import Github from '$lib/assets/svg/github.svelte'
</script>

<footer>
    <div id="container-1">
        <div id="logo">
                <Logo />
        </div>

        <div id="text">
            <p> Miel van Sleeuwen </p>
            <p> mielvansleeuwen@gmail.com </p>
            <p> +31 6 12345678 </p>
            <br>
            <p>Veghel, Netherlands</p>
        </div>
    </div>

    <div id="line">

    </div>

    <div id="container-3">
        <a href="https://www.linkedin.com/in/miel-van-sleeuwen-364766152/"> <Linkedin /> </a>
        <a  class="fa-brands fa-github" href="https://github.com/miel775"> <Github /> </a>
        <a href="https://www.youtube.com/@mhvs775/videos"> <Camera /> </a>
    </div>

</footer>

<style>
footer {
    display: flex;
    flex-direction: column;   /* stack items vertically */
    align-items: center;      /* center everything */
    margin-left: -6%;
    margin-right: -6%;
    margin-bottom: -6%;
    background-color: var(--neutral-color-light-1);
    padding: 2em 0;
}
    #container-1 {
        display: flex;
        justify-content: center;
        margin: 2em;
    }

    #logo {
        display: flex;
        align-items: center;
    }

    #line {
        display: block;
        background-color: var(--neutral-color-light-3);
        height: 0.5em;
        width: 50vw;
        display: flex;
        justify-content: center;
    }

    #text {
        line-height: 50%;
        margin: 2em;

        & p:nth-of-type(1) {
            font-size: 24px;
        }
    }

    #container-3 {
    display: flex;               /* puts icons in a row */
    flex-direction: row;
    justify-content: center;     /* centers the row */
    align-items: center;
    gap: 1.5em;                  /* spacing between the icons */
    margin-top: 1em;
    margin-bottom: 3em;

    & a {
        display: flex;
        height: 2em;                
        width: 2em;
        color: var(--neutral-color-light-4);
    }
    }
</style>