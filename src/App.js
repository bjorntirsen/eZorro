import { Route , Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import CurrenciesPage from './pages/CurrenciesPage';
import IndexesPage from './pages/IndexesPage';
import InstrumentPage from './pages/InstrumentPage';
import LandingPage from './pages/LandingPage';
import MarketDetailPage from './pages/MarketDetailPage';
import MarketPage from './pages/MarketPage';
import 'bootstrap/dist/css/bootstrap.css';

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
        
        <Route path="/markets/:marketname/:instrument" component={InstrumentPage} />

        <Route path="/markets/:marketname" component={MarketDetailPage} />

        <Route path="/markets">
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
