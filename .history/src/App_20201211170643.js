import { Route , Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import CurrenciesPage from './pages/CurrenciesPage';
import IndexesPage from './pages/IndexesPage';
import LandingPage from './pages/LandingPage';
import MarketDetailPage from './pages/MarketDetailPage';
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

        <Route path="/markets">
          <MarketPage />
        </Route>

        <Route path="/markets/:name" component={MarketDetailPage} />
          
        {/* <Route path="/markets/:marketname/:instrument" component={}> */}

        <Route path="/">
          <LandingPage />
        </Route>

      </Switch>      
    </div>
  );
}

export default App;
