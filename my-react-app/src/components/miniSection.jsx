import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function miniSection({ title, icon, children, id, image }) {
  return (
    <div id="wrapper">
    <section class="mini-section" id={id}>
        <div class="tab-title-section"> 
            <div class="tab-title">
          {icon && <img src={icon} alt={`${title} icon`} />}
          <p>{title}</p>
            </div>
            <div class="tab-icons">
                <div class="mini-section-block"></div>
            </div>
        </div>
        <div class="mini-section-content" id={id}>

          <div class="mini-section-image">
              <img src={image}></img>
          </div>
          <div class="mini-section-paragraph">
              {children}
          </div>
        </div>


    </section>
    </div>
  );
}

export default miniSection;
