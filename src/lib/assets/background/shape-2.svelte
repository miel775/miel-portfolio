<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

	import ShapeTwo from '$lib/assets/svg/shapetwo.svelte'

    gsap.registerPlugin(MorphSVGPlugin);

	onMount(() => {

	let randomRotate = Math.random() * 180;
let randomDuration = Math.random() * 10 + 10;
	let randomlittleDuration = Math.random() * 4 + 6;

        gsap.to('#shape-2', {
			x: 1500,
            duration: randomDuration,
            rotate: randomRotate,
			yoyo: true,
			repeat: -1
        })

        const tl = gsap.timeline({
            repeat: -1
        });

		tl.to('#shape-2-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M12.6969 67.6828C42.3651 1.91139 66.5267 -9.32482 83.8332 6.18945C113.802 24.9926 100.381 38.8898 88.216 62.5844C78.6216 81.2723 106.339 163.944 81.8103 164.843C26.1824 166.881 -24.3884 149.897 12.6969 67.6828Z"
			}
		});

		tl.to('#shape-2-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M10.8491 74.9967C37.2637 16.3002 55.0929 -10.2431 70.5015 3.60231C97.1835 20.3829 143.21 71.2536 132.38 92.3994C123.837 109.077 97.5195 130.724 75.6811 131.526C26.1537 133.345 -22.1692 148.367 10.8491 74.9967Z"
			}
		});


		tl.to('#shape-2-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M6.53127 32.6963C25.3333 -9.18607 71.0183 -2.43917 81.9862 7.4401C100.979 19.4137 150.907 63.2745 143.198 78.3629C137.117 90.2631 78.6658 117.392 63.1211 117.964C27.8673 119.262 -16.9713 85.0491 6.53127 32.6963Z"
			}
		});

        tl.to('#shape-2-1', {  
			duration: randomlittleDuration,
			morphSVG: {
				shape: "M22.504 71.9026C66.504 -24.8974 128.837 -3.43077 154.504 19.4026C198.949 47.0764 177.041 74.1272 159 109C144.771 136.504 143.377 175.677 107 177C24.4999 180 -32.496 192.903 22.504 71.9026Z"
			}
		});
	});
</script>

<ShapeTwo />

