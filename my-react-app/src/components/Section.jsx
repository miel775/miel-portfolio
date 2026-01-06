import './Section.css'; 

function Section() {
  return (
    <section class="main-section">
        <div class="tab-title-section"> 
            <div class="tab-title">
              <img src='src/assets/icons/about-icon.png'></img>
              <p> About </p>
            </div>

            <div class="tab-icons">
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
                <div class="main-section-block"></div>
            </div>
        </div>
        <div class="main-section-content">
            <p> Hello there my name is Miel I am 25 years old which is a quarter that is something you need to know haha</p>
        </div>
    </section>
  );
}

export default Section;
