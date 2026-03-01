import Sun from '../assets/library/sun'
import Ground from '../assets/library/ground'
import BenchA from '../assets/library/benchA';  
import Tree from '../assets/library/tree'
import Miel from '../assets/library/miel'
import Cloud from '../assets/library/cloud'
import AmsterdamHouseA from '../assets/library/amsterdamHouseA';
import AmsterdamHouseB from '../assets/library/amsterdamHouseB';
import AmsterdamHouseC from '../assets/library/amsterdamHouseC';
import AmsterdamHouseD from '../assets/library/amsterdamHouseD';
import AmsterdamHouseE from '../assets/library/amsterdamHouseE';
import './Banner.css'; 




const currentDate = new Date()

const minutes = currentDate.getMinutes()
const hours = currentDate.getHours()
const time = hours + minutes / 60;

// cloudAmount
const cloudAmount = Math.floor(Math.random() * (20 - 2 + 1)) + 2;

const treeAmount = Math.floor(Math.random() * (80 - 2 + 1)) + 3;

let hue = 210;
let lightness = 78;

if (time >= 8 && time < 8.5) {
    const progress = (time - 8) / 0.5;
    hue = 236 + (210 - 236) * progress;
    lightness = 18 + (78 - 18) * progress;
}

  else if (time >= 19 && time < 19.5) {
    const progress = (time - 19) / 0.5;
    hue = 210 + (236 - 210) * progress;
    lightness = 78 + (18 - 78) * progress;
  }

  else if (time >= 19.5 || time < 8) {
    hue = 236;
    lightness = 18;
  }

  else {
    hue = 210;
    lightness = 78;
  }

// hsl should be 233 from 19:30 untill 8:30

// hsl color is 236/210, 78%, 78%/18%

// between 8:00 and 8:30 hue should change from 236 to 210 and lightness from 18% to 78% precent
// between 19:00 and 19:30 the hue should change from 210 to 236 and lightness from 78% to 18% precent


function Banner() {
  return (
    <div id="banner-portfolio"   style={{
        backgroundColor: `hsl(${hue}, 78%, ${lightness}%)`,
        transition: 'background-color 1s linear',}}
        >
      {Array.from({ length: cloudAmount }).map((_, i) => (
        <Cloud key={i} />
      ))}
      <Miel />
      {Array.from({ length: treeAmount }).map((_, i) => (
        <Tree key={i} />
      ))}
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
      <BenchA />
      <Ground />
      <Sun />
    </div>


    );
}

export default Banner;