<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

	import ShapeFive from '$lib/assets/svg/shapefive.svelte'

	let pathOne = "M1.53831 37.9695C11.2834 6.32632 47.8964 34.3052 81.5 31.5C216.969 -36.5 206.689 25.5142 212.402 37.9695C219.542 53.5386 278.109 157.901 223.503 168C168.897 178.099 -10.643 77.5234 1.53831 37.9695Z≈"

	let pathTwo = "M1.16326 161.238C8.55595 137.298 23.0878 15.0737 48.5799 12.9513C151.348 -38.4952 95.8285 87.1282 100.162 96.5514C105.579 108.33 197.39 164.19 155.966 171.83C114.541 179.471 -8.07761 191.163 1.16326 161.238Z"

	let pathThree = "M1.85782 73.097C7.90927 53.3577 23.1609 10.3016 44.0279 8.55163C128.151 -33.8674 116.97 94.9077 113.578 102.747C94.9482 145.793 77.937 170.368 44.0279 176.668C10.1189 182.968 -5.7065 97.771 1.85782 73.097Z"

	let pathFour = "M1.99953 57C13.5995 19.4 96.4995 3.33333 136.5 0C172.5 12.8333 246.2 42.2 253 57C261.5 75.5 191.5 147 126.5 159C61.4995 171 -12.5005 104 1.99953 57Z"

    gsap.registerPlugin(MorphSVGPlugin);

	onMount(() => {

	let randomRotate = Math.random() * 180;
	let randomDuration = Math.random() * 10 + 10;
	let randomlittleDuration = Math.random() * 4 + 6;

        gsap.to('#shape-5', {
			x: 1500,
            duration: randomDuration,
            rotate: randomRotate,
			yoyo: true,
			repeat: -1
        });

        const tl = gsap.timeline({
            repeat: -1
        });

		tl.to('#shape-5-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: pathOne
			}
		});

		tl.to('#shape-5-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: pathTwo
			}
		});


		tl.to('#shape-5-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: pathThree
			}
		});

        tl.to('#shape-5-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: pathFour
			}
		});
	});
</script>

<ShapeFive />
