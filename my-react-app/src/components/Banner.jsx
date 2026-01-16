import './Banner.css';

const currentDate = new Date()

// get the current time in hours and minutes
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())

let minutesNow = currentDate.getMinutes()
let hoursNow = currentDate.getHours()

// hsl should be 233 from 19:30 untill 8:30

// hsl color is 236/210, 78%, 78%/18%

// between 8:00 and 8:30 hue should change from 236 to 210 and lightness from 18% to 78% precent
// between 19:00 and 19:30 the hue should change from 210 to 236 and lightness from 78% to 18% precent





function Banner() {
  return (
    <div id="banner-portfolio" style="background-color=hsl{variableHue},78%,{variableLightness}" >

        
    </div>
    );
}

export default Banner;