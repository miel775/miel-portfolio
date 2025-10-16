<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

    gsap.registerPlugin(MorphSVGPlugin);

	onMount(() => {
        const tl = gsap.timeline({
            repeat: -1
        });

		tl.to('#shape-1-1', {  
			duration: 2,
			morphSVG: {
				shape: "M265.061 456C265.061 661.408 534.983 817.5 329.5 817.5C124.017 817.5 47.4999 474.908 47.4999 269.5C47.4999 64.0922 -86.1754 0 119.308 0C324.791 0 265.061 250.592 265.061 456Z"
			}
		});

		tl.to('#shape-1-1', {  
			duration: 2,
			morphSVG: {
				shape: "M948.5 72C948.5 277.408 683.983 748.5 478.5 748.5C273.017 748.5 4.5 815.908 4.5 610.5C4.5 405.092 211.017 166 416.5 166C621.983 166 948.5 -133.408 948.5 72Z"
			},
            scale: 0.57, 
            transformOrigin: "top left"
		});


		tl.to('#shape-1-1', {  
			duration: 2,
			morphSVG: {
				shape: "M292 237.5C292 442.908 938.483 932.5 733 932.5C527.517 932.5 4 745.484 4 540.076C4 334.669 24.8243 0 230.307 0C435.791 0 292 32.0922 292 237.5Z"
			},
            scale: 0.57, 
            transformOrigin: "top left"
		});

        tl.to('#shape-1-1', {  
			duration: 2,
			morphSVG: {
				shape: "M536.905 396.774C536.905 602.182 581.544 912 376.06 912C170.577 912 4 745.484 4 540.076C4 334.668 24.8243 0 230.307 0C435.791 0 536.905 191.366 536.905 396.774Z"
			},
            repeat: true
		});
	});
</script>

<svg width="1700" height="1500" viewBox="0 0 1700 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_71_282)">
    <path id="shape-1-1" d="M536.905 396.774C536.905 602.182 581.544 912 376.06 912C170.577 912 4 745.484 4 540.076C4 334.668 24.8243 0 230.307 0C435.791 0 536.905 191.366 536.905 396.774Z" fill="url(#paint0_linear_71_282)"/>
    </g>
    <defs>
    <filter id="filter0_d_71_282" x="0" y="0" width="545" height="920" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_282"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_282" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_71_282" x1="229.479" y1="97.7439" x2="229.479" y2="841.591" gradientUnits="userSpaceOnUse">
    <stop stop-color="#000952"/>
    <stop offset="1" stop-color="#4454D5"/>
    </linearGradient>
    </defs>
</svg>

