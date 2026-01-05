import './Section.css'; 

function Section() {
  return (
    <section class="main-section">
        <div class="tab-title-section"> 
            {svgData}

            <p> {text} </p>

            <div class="tab-icons">
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
            </div>
        </div>
        <div class="main-section-content">
            {content}
        </div>
    </section>
  );
}

export default Section;