import { Route , Switch } from 'react-router-dom'
import './App.css';
import CurrenciesPage from './pages/CurrenciesPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Switch>

        <Route>
          <LandingPage />
        </Route>
          <CurrenciesPage />
        <Route>

        </Route>
            <
        <Route>

        </Route>

        <Route>

        </Route>

      </Switch>      
    </div>
  );
}

export default App;
