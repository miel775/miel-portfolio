import './Block.css'; 

function Section({ title, img, children }) {
  return (
        <section id="block">
            <img src={img} width="200"></img>
            <h3>{title}</h3>
            <p>{children}</p>
        </section>
  );
}

export default Section;
