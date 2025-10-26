<script>
  import { onMount } from 'svelte';
	import { gsap } from 'gsap';

  import MorphSVGPlugin from 'gsap/MorphSVGPlugin';


  gsap.registerPlugin(MorphSVGPlugin);


  onMount(() => {
    gsap.to('#base-start', {
      duration: 10,
        });

      const tl = gsap.timeline({
            repeat: 0
      });

		tl.to('#base-start-path', {  
			duration: 10,
			morphSVG: {
				shape: "M1132.573,275.682V44.882l-57.407,32.315v198.485h-88.809v-101.652c.93-.179,1.845-.397,2.752-.634h-22.149v102.286h-52.784V105.166L848.125,7.985l-62.491,93.056v174.641h-88.024v-34.292c.206-.074.402-.166.606-.245h-20.608c.203.079.4.171.606.245v34.292h-75.824v-77.005l-41.246-51.513-40.284,50.704v77.814h-85.28v-34.071c.523-.145,1.041-.301,1.555-.467h-24.565c1.135.366,2.29.685,3.467.95v33.588h-51.684v-114.666h-25.743v114.666h-110.606V114.371L161.337,1.439l-65.151,110.606v163.636H.731v38.748h1259.135v-38.748h-127.294,0Z"
			}
		});

  })


</script>

<svg id="tree-1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.304 115.304">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 1px;
      }
    </style>
  </defs>
  <circle class="cls-1" cx="57.652" cy="57.652" r="56.796"/>
</svg>

<svg id="tree-2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.312 67.312">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: #000;
        stroke-miterlimit: 10;
      }
    </style>
  </defs>
  <circle class="cls-1" cx="33.656" cy="33.656" r="33.156"/>
</svg>

<svg id="tree-3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.31 74.31">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 1.104px;
      }
    </style>
  </defs>
  <circle class="cls-1" cx="37.155" cy="37.155" r="36.603"/>
</svg>

<svg id="tree-4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.304 115.304">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 1.713px;
      }
    </style>
  </defs>
  <circle class="cls-1" cx="57.652" cy="57.652" r="56.796"/>
</svg>

<svg id="windmill-element" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.067 225.067">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 1px;
      }
    </style>
  </defs>
  <polygon class="cls-1" points="223.856 206.44 129.95 112.534 223.856 18.627 206.44 1.211 112.534 95.118 18.627 1.211 1.211 18.627 95.118 112.534 1.211 206.44 18.627 223.856 112.534 129.95 206.44 223.856 223.856 206.44"/>
</svg>


<svg id="base-start" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260.597 40.503">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 1.462px;
      }
    </style>
  </defs>
  <path id="base-start-path" class="cls-1" d="M1132.573,1.025h-146.216c.93-.179,1.845.237,2.752,0h-22.149s-52.784,0-52.784,0h0l-66.051-.283-62.491.283h-88.024c.206-.074.402.079.606,0h-20.608c.203.079.4-.074.606,0h-75.824l-41.246-.294-40.284.294h-85.28c.523-.145,1.041.021,1.555-.145l-24.565.145c1.135.366,2.29-.265,3.467,0h-188.033l-69.332.595-62.486-.596H.731v38.748h1259.135V1.024h-127.294,0Z"/>
</svg>
<style>

#base-start {
    width: 50vw;
    height: 30vh;
}

#windmill-element {
  width: 200px;
  height: 200px;
}

#tree-1 {
  width: 200px;
  height: 200px;
}

#tree-2 {
  width: 200px;
  height: 200px;
}

#tree-3 {
  width: 200px;
  height: 200px;
}

#tree-4 {
  width: 200px;
  height: 200px;
}

#tree-5 {
  width: 200px;
  height: 200px;
}
</style>