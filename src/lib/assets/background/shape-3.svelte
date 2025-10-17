<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

    gsap.registerPlugin(MorphSVGPlugin);

	onMount(() => {

	let randomRotate = Math.random() * 180;
	let randomDuration = Math.random() * 20 + 1;

        gsap.to('#shape-3', {
            x: 1500,
            duration: randomDuration,
            rotate: randomRotate,
			yoyo: true,
			repeat: -1
        })

        const tl = gsap.timeline({
            repeat: -1
        });

		tl.to('#shape-3-1', {  
			duration: 10,
			morphSVG: {
				shape: "M6.8069 80.9003C23.1064 21.7352 86.92 -6.86159 96.3046 1.39688C114.333 11.2578 132.235 23.9086 131.497 40.9636C128.904 100.868 184.249 81.6398 184.99 131.56C185.73 181.481 146.834 251 108.308 251C69.7816 251 18.2899 224.894 18.2897 184.439C18.2897 171.127 -13.5675 154.857 6.8069 80.9003Z"
			}
		});

		tl.to('#shape-3-1', {  
			duration: 10,
			morphSVG: {
				shape: "M3.07928 61.5292C15.4897 16.5305 64.077 -5.21915 71.2223 1.06193C84.9489 8.56174 55.1826 68.0283 54.6204 80.9997C52.6461 126.561 138.183 62.0917 138.747 100.059C139.311 138.027 67.2016 216 37.868 216C8.53439 216 54.6188 160.825 54.6187 130.056C54.6187 119.931 -12.4337 117.778 3.07928 61.5292Z"
			}
		});


		tl.to('#shape-3-1', {  
			duration: 10,
			morphSVG: {
				shape: "M54.0723 74.4342C68.5796 21.7451 62.8508 -5.99803 71.2035 1.35649C87.2494 10.138 139.949 -2.69999 139.292 12.4883C136.984 65.836 171.336 29.9778 171.995 74.4342C172.655 118.891 88.3614 210.189 54.0714 210.189C19.7814 210.189 -0.000846608 205.696 -0.000976562 169.669C-0.00101933 157.814 35.9381 140.296 54.0723 74.4342Z"
			}
		});

        tl.to('#shape-3-1', {  
			duration: 22,
			morphSVG: {
				shape: "M104 72.9999C126 -7.0001 156.833 -4.66677 169.5 6.4999C193.833 19.8333 217.996 36.9391 217 60C213.5 141 216 168.5 217 236C218 303.5 92.5001 332.5 40.5001 332.5C-11.4999 332.5 -10.9999 268.5 33.0001 236C77.0001 203.5 76.5001 173 104 72.9999Z"
			}
		});
	});
</script>

<svg id="shape-3" width="218" height="333" viewBox="0 0 218 333" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="shape-3-1" d="M104 72.9999C126 -7.0001 156.833 -4.66677 169.5 6.4999C193.833 19.8333 217.996 36.9391 217 60C213.5 141 216 168.5 217 236C218 303.5 92.5001 332.5 40.5001 332.5C-11.4999 332.5 -10.9999 268.5 33.0001 236C77.0001 203.5 76.5001 173 104 72.9999Z" fill="url(#paint0_linear_143_22)"/>
<defs>
<linearGradient id="paint0_linear_143_22" x1="111.493" y1="0.805664" x2="111.493" y2="332.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#010953"/>
<stop offset="1" stop-color="#3F4FCC"/>
</linearGradient>
</defs>
</svg>






<style>
#shape-3 {
    position: relative;
	top: 20%;
	left: 900px;
    filter: blur(25px);
	scale: 1.5;
}
</style>
