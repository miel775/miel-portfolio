import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from('#wrapper', {
//   scrollTrigger: {
//     trigger: "#wrapper",
//     start: "150% 40%",
//     end: "170% 50%",
//     markers: true,
//     toggleActions: "restart pause revert pause"
// },
// 	y: 500,
// });

function Section({ title, icon, children, id }) {
  return (
    <div id="wrapper">
    <section class="main-section" id={id}>
        <div class="tab-title-section"> 
            <div class="tab-title">
          {icon && <img src={icon} alt={`${title} icon`} />}
          <p>{title}</p>
            </div>

            <div class="tab-icons">
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
            </div>
        </div>
        <div class="main-section-content">
            {children}
        </div>
    </section>
    </div>
  );
}

export default Section;
