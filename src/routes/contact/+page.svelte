<script>
    import Background from "$lib/components/background/background.svelte";
    import Section from "$lib/components/section.svelte";
    import NavigationBar from '$lib/components/navigation-bar.svelte'
    import Contact from '$lib/components/contact-form.svelte'
    import Footer from '$lib/components/footer.svelte'
</script>

<NavigationBar />

<div id="banner"></div>

<Background />

<Contact />

<Footer />

<style>
    #banner {
        height: 30vh;
    }
</style>
