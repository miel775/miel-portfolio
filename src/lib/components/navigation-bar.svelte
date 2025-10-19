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
        position: sticky;
        display: flex;
        justify-content: space-between;
        top: 0;
        left: 0;
        padding: var(--padding-desktop);
    }

    nav a {
        padding: var(--padding-desktop);
        color: var(--neutral-color-light-4);
    }
</style>