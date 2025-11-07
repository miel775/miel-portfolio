<script>
    import Logo from '$lib/assets/svg/logo.svelte'

</script>

<nav>
    <a href="/" id="logo">
        <Logo />
    </a>

    <div id="navigation-links">
        <a href="/portfolio"> Portfolio </a>
        <a href="/about"> About </a>
        <a href="/projects"> Projects </a>
        <a href="/contact"> Contact </a>
    </div>
</nav>

<style>
    nav {
        display: grid;
        grid-template-columns: 10% 80%;
        padding: var(--padding-desktop);
        background-color: var(--primary-color);
        align-items: center;
    }

    #logo {
        display: flex;
        justify-content: center;
    }

    #navigation-links  {
        display: flex;
        gap: 1em;
        justify-content: flex-end;
    
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
}
</style>