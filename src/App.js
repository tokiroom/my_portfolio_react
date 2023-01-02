import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
