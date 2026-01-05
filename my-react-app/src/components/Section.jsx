import './Section.css'; 

function Section() {
  return (
    <section class="main-section">
        <div class="tab-title-section"> 
            <img src='src/assets/icons/about-icon.png'></img>

            <p> Title </p>

            <div class="tab-icons">
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
            </div>
        </div>
        <div class="main-section-content">
            <p> This is just a story about how we have met</p>
        </div>
    </section>
  );
}

export default Section;
