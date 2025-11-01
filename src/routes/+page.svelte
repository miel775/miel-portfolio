<script>
    import Background from "$lib/components/background/background.svelte";
    import Section from "$lib/components/Section.svelte";
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

<Section title="Portfolio" content="discover my portfolio">
</Section>


<Section title="About" content="Welcome to my portfolio, here you can take a closer look into my personal world. My name is Miel van Sleeuwen I am 24 years old and I am from the Netherlands! 

This is my portfolio take a careful look into my world! My mantra is never stop exploring!I am convinced the world has so much to offer with a combination of creativity and adventure.

 Experience in Front end Web Development, Video creating and Urban Design. ">
</Section>

<Section title="Projects" content="Here are projects I've worked on in my career, hover to discover what it means" />


<Contact />

<Footer />




<style>

    #banner {
        height: 100vh;
    }

</style>