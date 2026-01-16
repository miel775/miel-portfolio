import './Banner.css';

const currentDate = new Date()

// get the current time in hours and minutes
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())

const minutes = currentDate.getMinutes()
const hours = currentDate.getHours()
const time = hours + minutes / 60;

let hue = 210;
let lightness = 78;

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
    </div>
    );
}

export default Banner;