	<svg id="grainy-bg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
		<filter id="noiseFilter">
			<feTurbulence 
				type="fractalNoise" 
				baseFrequency="0.55" 
				numOctaves="3" 
				stitchTiles="stitch" />
		</filter>
		<rect width="200%" height="200%" filter="url(#noiseFilter)" />
	</svg>

    <style>
        
    </style>