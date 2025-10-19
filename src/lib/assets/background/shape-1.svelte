<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

	import ShapeOne from '$lib/assets/svg/shapeone.svelte'

    gsap.registerPlugin(MorphSVGPlugin);

	onMount(() => {

	let randomRotate = Math.random() * 180;
	let randomDuration = Math.random() * 10 + 10;
	let randomlittleDuration = Math.random() * 4 + 6;

        gsap.to('#shape-1', {
			x: 1500,
            duration: randomDuration,
            rotate: randomRotate,
			yoyo: true,
			repeat: -1
        })

        const tl = gsap.timeline({
            repeat: -1
        });

		tl.to('#shape-1-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M24.1971 56.5003C27.6118 49 44.4951 27 98.995 0.5C178.495 50.0002 181.495 218.5 98.995 221.5C16.495 224.5 -30.8761 177.467 24.1971 56.5003Z"
			}
		});

		tl.to('#shape-1-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M32.4709 92.6061C35.5589 85.8626 54.3759 0 133.754 0C205.647 44.5051 138.728 296.25 64.122 298.947C-10.4843 301.644 -17.3329 201.366 32.4709 92.6061Z"
			}
		});


		tl.to('#shape-1-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M9.30942 92.5185C-9.04184 63.2868 -0.903719 0 59.9159 0C115 34.1404 207.873 338.912 150.71 340.982C93.5464 343.051 58.0826 170.209 9.30942 92.5185Z"
			}
		});

        tl.to('#shape-1-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M20.4996 72.5002C64.4996 -24.2998 126.833 -2.83311 152.5 20.0002C231.999 69.5005 196.5 353 114 356C31.4996 359 -34.5004 193.5 20.4996 72.5002Z"
			}
		});
	});
</script>

<ShapeOne />

<style>

#shape-1 {
    position: absolute;
	top: 44%;
	left: -300px;
	scale: 1.5;
    filter: blur(25px);
}
</style>
