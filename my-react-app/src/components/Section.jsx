import './Section.css'; 

function Section({ title, icon, children }) {
  return (
    <div id="wrapper">
    <section class="main-section">
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
