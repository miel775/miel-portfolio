import Miel404 from '/src/assets/library/miel-404.jsx';


function errorPage() {
  return (
        <main id="error-page">
          <Miel404 />
          <section id="miel-404-section"> 
          <h1>Oh oh...</h1>

          <p>There may be some constructions on this page</p>
          <a id="error-page-button" href="/">Go back home</a>
          </section>
        </main>
          );
}
export default errorPage;