import { Route , Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import CurrenciesDetailPage from './pages/CurrenciesDetailPage';
import CurrenciesPage from './pages/CurrenciesPage';
import IndexesPage from './pages/IndexesPage';
import LandingPage from './pages/LandingPage';
import MarketPage from './pages/MarketPage';
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import CryptoPage from "./pages/CryptoPage"
import CurrenciesPage from "./pages/CurrenciesPage"
import IndexesPage from "./pages/IndexesPage"
import LandingPage from "./pages/LandingPage"
import MarketPage from "./pages/MarketPage"

import CryptoDetailPage from "./pages/CryptoDetailPage"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/currencies/:id" component={CurrenciesDetailPage} />
        
        <Route path="/currencies">
          <CurrenciesPage />
        </Route>

        <Route path="/CryptoDetailPage/:id" component={CryptoDetailPage} />

        <Route path="/crypto">
          <CryptoPage />
        </Route>

        <Route path="/indexes">
          <IndexesPage />
        </Route>

        <Route path="/market/:marketname/:instrument">
          <MarketPage />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
