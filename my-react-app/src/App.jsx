import './general.css';
import Section from './components/Section';
import Header from './components/header'; 
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        <Banner/>
        <h1> Header 1</h1>
        <h2> Header 2</h2>

        <p> This is a simple text</p>
        <Section />

        <Section />
      </main>
    </div>
  );
}

export default App;