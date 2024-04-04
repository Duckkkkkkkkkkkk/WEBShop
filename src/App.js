import Arrvals from './components/arrivals/Arrvals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promoaction from './components/promoaction/Promoaction';

function App() {

  return (
    <div className="App">
      <Header/>
      {/*<Promoaction/>*/}
      <Brands/>
      <Arrvals/>
    </div>
  );
}

export default App;
