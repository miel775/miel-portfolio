<script>
    import Logo from '$lib/assets/svg/logo.svelte'

</script>

<nav>
    <a href="/" id="logo">
        <Logo />
    </a>

    <div id="navigation-links">
        <a href="/portfolio">
            <img src="src/lib/assets/library/ico/portfolio-icon.png">
            <p>Portfolio</p>
        </a>
        <a href="/about">
            <img src="src/lib/assets/library/ico/about-me.png">
            <p>About</p>
        </a>
        <a href="/projects">
            <img src="src/lib/assets/library/ico/projects-icon.png">
            <p>Projects</p>
        </a>
        <a href="/contact"> 
            <img src="src/lib/assets/library/ico/contact-icon.png">
            <p>Contact</p>
        </a>
    </div>
</nav>

<style>
    nav {
        display: grid;
        grid-template-columns: 10% 90%;
        padding: var(--padding-desktop);
        background-color: var(--primary-color);
        align-items: center;
        margin: -0.5em;
    }

    #logo {
        display: flex;
        justify-content: center;
    }

    #navigation-links  {
        display: flex;
        gap: 1em;
        justify-content: flex-end;

    p {
        display: block;

    @media (max-width: 1080px) {
        display: none;
    }
    }
    
    a {
        width: 10vw;
        height: 5vh;
        color: var(--neutral-color-light-4);
        background-color: var(--pimary-color-light-1);
        border: var(--neutral-color-light-4) solid 2px;
        gap: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a:hover {
        background-color: var(--accent-color-2-dark-3);
        animation-duration: 0.3s;
        text-decoration: none;
    }

}
</style>