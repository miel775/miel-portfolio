import MiniBanner from '/src/components/MiniBanner';
import Portfolio from '/src/components/Portfolio';
import '/src/stylesheets/blogs.css';

function PortfolioOverview() {
  return (
    <div id="wrapper-header">
      <MiniBanner title="Blogs"/>
      <main>
        
        <div id="blog-head-picture">
          <img src="./src/assets/blogs/example.png"></img>
        </div>

        <p>In the study of Front End Web Development you discover a lot of new feature when using CSS. CSS is an easy way to style HTML elements but its features changing the whole time.  In this blog I am going to discover three new features that are released last year.</p>

        <h2>Scroll button</h2>

        <p>For a coding spike last year there is a way to solve a photo carrousel without using any javascript. This seemed to be an interesting way to make a carrousel with the new scroll button function you don’t have to worry about it.</p>

      </main>
    </div>
  );
}

export default PortfolioOverview;
