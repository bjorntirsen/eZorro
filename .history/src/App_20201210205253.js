import { Route , Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import CurrenciesPage from './pages/CurrenciesPage';
import IndexesPage from './pages/IndexesPage';
import LandingPage from './pages/LandingPage';
import MarketPage from './pages/MarketPage';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route path="/currencies" >
          <CurrenciesPage />
        </Route>

        <Route path="/crypto">
          <CryptoPage />
        </Route>

        <Route path="/indexes">
          <IndexesPage />
        </Route>

        <Route path="/markets/:marketname/:instrument">
          <MarketPage />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>

      </Switch>      
    </div>
  );
}

export default App;
