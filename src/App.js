import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Skills/>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
