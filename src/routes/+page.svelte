<script>
    import Background from "$lib/components/background/background.svelte";
    import Section from "$lib/components/section.svelte";
    import NavigationBar from '$lib/components/navigation-bar.svelte'
    import Contact from '$lib/components/contact-form.svelte'
    import Footer from '$lib/components/footer.svelte'

    import Portfoliopreview from '$lib/assets/svg/portolio-preview.svelte'
    import PortolioPreview from "$lib/assets/svg/portolio-preview.svelte";

    export let data;
</script>

<NavigationBar />

<div id="banner">

</div>

<Background />

<Section title="halle" content="hahah">
    <PortolioPreview />
</Section>

<Contact />

<Footer />

<style>

    #banner {
        height: 100vh;
    }

</style>