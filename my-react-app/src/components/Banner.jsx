import React, { useState, useEffect } from 'react';
import Sun from '../assets/library/sun';
import Ground from '../assets/library/ground';
import BenchA from '../assets/library/benchA';  
import Tree from '../assets/library/tree';
import Miel from '../assets/library/miel';
import Cloud from '../assets/library/cloud';
import AmsterdamHouseA from '../assets/library/amsterdam/amsterdamHouseA';
import AmsterdamHouseB from '../assets/library/amsterdam/amsterdamHouseB';
import AmsterdamHouseC from '../assets/library/amsterdam/amsterdamHouseC';
import AmsterdamHouseD from '../assets/library/amsterdam/amsterdamHouseD';
import AmsterdamHouseE from '../assets/library/amsterdam/amsterdamHouseE';
import '../assets/library/animationLibrary.css'

function Banner() {
  // 1. Live time tracking so the sunset animates without refreshing
  const [time, setTime] = useState(() => {
    const d = new Date();
    return d.getHours() + d.getMinutes() / 60;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setTime(d.getHours() + d.getMinutes() / 60);
    }, 60000); // Check the time every 60 seconds
    return () => clearInterval(interval);
  }, []);

  // 2. Generate random amounts ONCE on mount so they don't jump around on re-renders
  const [cloudAmount] = useState(() => Math.floor(Math.random() * (20 - 2 + 1)) + 2);
  const [treeAmount] = useState(() => Math.floor(Math.random() * (80 - 2 + 1)) + 3);

  // Default to Day colors
  let hueTop = 210, lightTop = 78;
  let hueBottom = 210, lightBottom = 78;

  // 3. Color Logic
  if (time >= 8 && time < 8.5) {
    // SUNRISE: 8:00 to 8:30
    const progress = (time - 8) / 0.5; // 0.0 to 1.0 over the 30 minutes
    
    // Top of sky: Transitions Night -> Day
    hueTop = 236 + (210 - 236) * progress;
    lightTop = 18 + (78 - 18) * progress;

    // Bottom of sky: Transitions Night -> Sunrise Orange -> Day
    if (progress < 0.5) {
      const p = progress * 2; // scale first 15 mins to 0-1
      hueBottom = 236 + (30 - 236) * p; // Hue 30 is a warm orange
      lightBottom = 18 + (60 - 18) * p; 
    } else {
      const p = (progress - 0.5) * 2; // scale last 15 mins to 0-1
      hueBottom = 30 + (210 - 30) * p;
      lightBottom = 60 + (78 - 60) * p;
    }

  } else if (time >= 19 && time < 19.5) {
    // SUNSET: 19:00 to 19:30
    const progress = (time - 19) / 0.5; 
    
    // Top of sky: Transitions Day -> Night
    hueTop = 210 + (236 - 210) * progress;
    lightTop = 78 + (18 - 78) * progress;

    // Bottom of sky: Transitions Day -> Sunset Orange/Pink -> Night
    if (progress < 0.5) {
      const p = progress * 2; 
      hueBottom = 210 + (15 - 210) * p; // Hue 15 is deep sunset red/orange
      lightBottom = 78 + (55 - 78) * p;
    } else {
      const p = (progress - 0.5) * 2; 
      hueBottom = 15 + (236 - 15) * p;
      lightBottom = 55 + (18 - 55) * p;
    }

  } else if (time >= 19.5 || time < 8) {
    // NIGHT
    hueTop = 236; lightTop = 18;
    hueBottom = 236; lightBottom = 18;
  }
  // If no conditions match, it's DAY (already set to 210, 78 as default)

  return (
    <div 
      id="banner-portfolio"   
      style={{
        // Apply the calculated top and bottom colors to a linear-gradient
        background: `linear-gradient(to bottom, hsl(${hueTop}, 78%, ${lightTop}%), hsl(${hueBottom}, 78%, ${lightBottom}%))`,
        transition: 'background 1s linear', // smooth CSS transition between minute-ticks
      }}
    >
      {Array.from({ length: cloudAmount }).map((_, i) => (
        <Cloud key={`cloud-${i}`} />
      ))}
      
      <Miel />
      
      {Array.from({ length: treeAmount }).map((_, i) => (
        <Tree key={`tree-${i}`} />
      ))}
      
      <div id="amsterdam-houses">
        <AmsterdamHouseA />
        <AmsterdamHouseB />
        <AmsterdamHouseA />
        <AmsterdamHouseC />
        <AmsterdamHouseE />
        <AmsterdamHouseD />
        <AmsterdamHouseA />
        <AmsterdamHouseB />
        <AmsterdamHouseA />
        <AmsterdamHouseC />
        <AmsterdamHouseE />
        <AmsterdamHouseD />
        <AmsterdamHouseA />
        <AmsterdamHouseB />
        <AmsterdamHouseA />
        <AmsterdamHouseC />
        <AmsterdamHouseE />
        <AmsterdamHouseA />
        <AmsterdamHouseC />
        <AmsterdamHouseE />
        <AmsterdamHouseD />
        <AmsterdamHouseA />
        <AmsterdamHouseB />
        <AmsterdamHouseA />
        <AmsterdamHouseC />
        <AmsterdamHouseE />
        <AmsterdamHouseD />
        <AmsterdamHouseA />
        <AmsterdamHouseB />
        <AmsterdamHouseA />
      </div>
      
      <BenchA />
      <Ground />
      <Sun />
    </div>
  );
}

export default Banner;