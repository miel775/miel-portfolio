<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

    gsap.registerPlugin(MorphSVGPlugin);

	onMount(() => {

	let randomRotate = Math.random() * 180;
	let randomDuration = Math.random() * 20 + 1;

        gsap.to('#shape-4', {
            x: 3000,
            duration: randomDuration,
            rotate: randomRotate,
			yoyo: true,
			repeat: -1
        });

        const tl = gsap.timeline({
            repeat: -1
        });

		tl.to('#shape-4-1', {  
			duration: 10,
			morphSVG: {
				shape: "M91.8243 36.1376C84.3317 62.4017 173.98 54.1349 171.584 72.9314C182.498 94.394 203.37 144.758 199.536 174.512C194.744 211.705 149.326 140.118 101.807 158.514C54.2885 176.911 11.0582 257.297 1.07524 233.701C-8.90769 210.106 54.535 151.344 30.3296 112.923C9.16558 79.3291 46.5974 64.9329 48.9933 36.1383C51.3892 7.34369 110.193 -28.2508 91.8243 36.1376Z"
			}
		});

		tl.to('#shape-4-1', {  
			duration: 10,
			morphSVG: {
				shape: "M107.924 28.3363C102.036 48.9305 146.573 82.3324 189.4 25.4836C300.6 -45.8721 178.264 159.919 175.252 183.25C171.486 212.414 135.794 156.281 98.4517 170.706C61.1091 185.131 25.3372 220.24 17.4921 201.738C9.64701 183.236 -28.2809 111.345 40.4816 107.033C71.622 105.08 72.3822 50.9153 74.265 28.3368C76.1478 5.75834 122.359 -22.1521 107.924 28.3363Z"
			}
		});


		tl.to('#shape-4-1', {  
			duration: 10,
			morphSVG: {
				shape: "M122.923 28.3363C117.035 48.9305 120.674 154.849 163.5 98C207.5 71.5 193.263 159.919 190.251 183.25C186.485 212.414 160.265 251.075 122.923 265.5C85.58 279.925 40.3361 220.24 32.491 201.738C24.6459 183.236 -36.2705 87.3127 32.492 83C63.6323 81.0469 87.3811 50.9153 89.2639 28.3368C91.1467 5.75834 137.358 -22.1521 122.923 28.3363Z"
			}
		});

        tl.to('#shape-4-1', {  
			duration: 22,
			morphSVG: {
				shape: "M184.5 4.00005C217.7 12 220 61 217 84.5C230.666 111.333 256.8 174.3 252 211.5C246 258 195 310.5 135.5 333.5C76 356.5 15.9996 315 3.4996 285.5C-9.0004 256 15.4996 216 40.4996 165C65.4996 114 60.4996 74.5 63.4996 38.5C66.4996 2.50005 143 -5.99995 184.5 4.00005Z"
			}
		});
	});
</script>

<svg id="shape-4" width="253" height="341" viewBox="0 0 253 341" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="shape-4-1" d="M184.5 4.00005C217.7 12 220 61 217 84.5C230.666 111.333 256.8 174.3 252 211.5C246 258 195 310.5 135.5 333.5C76 356.5 15.9996 315 3.4996 285.5C-9.0004 256 15.4996 216 40.4996 165C65.4996 114 60.4996 74.5 63.4996 38.5C66.4996 2.50005 143 -5.99995 184.5 4.00005Z" fill="url(#paint0_radial_143_27)"/>
<defs>
<radialGradient id="paint0_radial_143_27" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126.355 170.141) rotate(90) scale(170.032 126.225)">
<stop stop-color="#4E5EE3"/>
<stop offset="1" stop-color="#2B347D"/>
</radialGradient>
</defs>
</svg>



<style>
#shape-4 {
    position: relative;
	top: 10%;
	left: 500px;
    filter: blur(50px);
}
</style>
