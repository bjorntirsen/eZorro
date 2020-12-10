import { Route , Switch } from 'react-router-dom'
import './App.css';
import CryptoPage from './pages/CryptoPage';
import CurrenciesPage from './pages/CurrenciesPage';
import IndexesPage from './pages/IndexesPage';
import LandingPage from './pages/LandingPage';
import MarketPage from './pages/MarketPage';

function App() {
  return (
    <div>
      <Switch>
        
        <Route>
          <CurrenciesPage path="/currencies" />
        </Route>

        <Route>
          <CryptoPage path="/crypto" />
        </Route>

        <Route>
          <IndexesPage path="/indexes" />
        </Route>

        <Route>
          <MarketPage path="/market" />
        </Route>

        <Route>
          <LandingPage path="/" />
        </Route>

      </Switch>      
    </div>
  );
}

export default App;
