<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { library, icon } from "@fortawesome/fontawesome-svg-core";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

    import Logo from "$lib/assets/svg/logo.svelte";

    import Windmill from '$lib/assets/library/windmill.svelte'

</script>

<footer>
    <div id="container-1">
        <div id="logo">
            <Logo />
        </div>
    </div>

    <div id="container-2">
        <h3>Links</h3>
        <ul>
        <li> <a href="/">Portfolio</a> </li>
        <li> <a href="/"> Projects</a> </li>
        <li> <a href="/"> Blogs</a>  </li>
        <li> <a href="/"> Library</a>  </li>
        <li>  <a href="/"> About</a></li>
        </ul>
        <div id="link-icons">
        <a href="https://www.youtube.com/channel/UCeAhPGRqjBddgP9R_ivReGA"><i class="fa-brands fa-square-youtube"></i> </a>
        <a href="https://github.com/miel775"> <i class="fa-brands fa-square-github"></i> </a>
        <a href="https://www.linkedin.com/in/miel-van-sleeuwen-364766152/"> <i class="fa-brands fa-linkedin"></i> </a> 
        </div>
    </div>

    <div id="container-3">
        <div id="text">
            <h3>Miel van Sleeuwen</h3>
            <p>Never Stop Exploring</p>
            <ul>
                <li> <i class="fa-solid fa-envelope"></i> mielvansleeuwen@gmail.com</li>
                <li> <i class="fa-solid fa-phone"></i> +31 6 12345678</li>
                <li> <i class="fa-solid fa-location-dot"></i> Veghel, Netherlands</li>
            </ul>
        </div>
    </div>

    <div id="container-4">
        <Windmill />
    </div>
</footer>

<style>

    #logo {
        scale: 0.5;
    }

    h3 {
        font-size: 40px;
    }

    #container-1 {
        width: 20vw;
    }

    #container-2 {
        color: var(--neutral-color-light-4);
        text-decoration: none;
        line-height: 2em;
    }

    li a {
        color: var(--neutral-color-light-4);
        line-height: 1em;
    }



</style>
