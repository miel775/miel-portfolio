<script>
    import Background from "$lib/components/background/background.svelte";
    import Section from "$lib/components/section.svelte";
    import NavigationBar from '$lib/components/navigation-bar.svelte';
    import Contact from '$lib/components/contact-form.svelte';
    import Footer from '$lib/components/footer.svelte';

    import Windmill from '$lib/assets/library/windmill.svelte';
    import Brightonpier from '$lib/assets/library/brighton-pier.svelte';
    import Tokyofacade from '$lib/assets/library/tokyo-facade.svelte';
    import BrightonPier from "$lib/assets/library/brighton-pier.svelte";
    import TokyoFacade from "$lib/assets/library/tokyo-facade.svelte";
</script>

<div id="sky">

    <div id="land"></div>
</div>

<div id="windmill">
    <Windmill/> 
</div>

<div id="tokyo-facade">
    <TokyoFacade />
</div>

<div id="brighton-pier">
<BrightonPier />
</div>




<style>

    #land {
        height: 20vh;
        width: 100vw;
        top: 40em;
        background-color: #367727;
        border: #000 solid 2px;
        position: relative;
        z-index: 1;
    }

    #sky {
        height: 100vh;
        background-color: #71C9E8;
        margin-left: -6%;
        margin-right: -6%;
        margin-top: -18%;
    }

    #windmill {
        position: absolute;
        left: 10em;
        top: 30em;
        z-index: 2;
    }

    #brighton-pier {
        position: absolute;
        left: 25em;
        top: 15em;
        z-index: 2;
        width: 40em;
    }

    #tokyo-facade {
        position: absolute;
        left: 75%;
        top: 60%;
        z-index: 2;
        width: 10em;

    }
</style>