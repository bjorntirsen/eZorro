import { Route , Switch } from 'react-router-dom'
import './App.css';
import CurrenciesPage from './pages/CurrenciesPage';
import IndexesPage from './pages/IndexesPage';
import LandingPage from './pages/LandingPage';
import MarketPage from './pages/MarketPage';

function App() {
  return (
    <div>
      <Switch>

        <Route>
          <LandingPage />
        </Route>
        
        <Route>
          <CurrenciesPage />
        </Route>

        <Route>
          <IndexesPage />
        </Route>

        <Route>
          <MarketPage />
        </Route>

      </Switch>      
    </div>
  );
}

export default App;
