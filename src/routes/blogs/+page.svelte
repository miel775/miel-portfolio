<script>
    import Background from "$lib/components/background/background.svelte"
    import Section from "$lib/components/section.svelte"
    import NavigationBar from '$lib/components/navigation-bar.svelte'
    import Contact from '$lib/components/contact-form.svelte'
    import Footer from '$lib/components/footer.svelte'

    import Portfoliopreview from '$lib/assets/svg/portolio-preview.svelte'
    import AboutSection from "$lib/components/sections/AboutSection.svelte"
    import PortfolioSection from "$lib/components/sections/PortfolioSection.svelte"
    import ProjectsSection from "$lib/components/sections/ProjectsSection.svelte"
    import Portfolio from "$lib/components/portfolio.svelte"
</script>

<NavigationBar />

<div id="banner">

</div>

<Background />

<Contact />

<Footer />




<style>

    #banner {
        height: 100vh;
    }

</style>