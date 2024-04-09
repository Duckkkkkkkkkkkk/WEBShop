import Arrvals from './components/arrivals/Arrvals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promoaction from './components/promoaction/Promoaction';
import Sales from './components/sales/Sales';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Promoaction/>
      <Brands/>
      <Arrvals/>
      <Sales/>
      <Footer/>
    </div>
  );
}

export default App;
