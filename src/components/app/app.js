import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from '../header';
import { SwapiService, TestSwapiService } from '../../services';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';
import { LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage } from '../pages';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundry';
import StarshipDetails from '../sw-components/starship-details';

const App = () => {

  const [swapiService, setSwapiService] = useState(new SwapiService());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onServiceChange = () => {
    const Service = swapiService instanceof SwapiService ? TestSwapiService : SwapiService;
    setSwapiService(new Service());
  }
  const onLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className='container'>
      <ErrorBoundary>
        <SwapiServiceProvider value={swapiService}>
          <Router>

            <Header onServiceChange={onServiceChange} />
            <RandomPlanet updateInterval={10000} />

            <Routes>
              <Route index path='/' element={<h2 className='mt-4'>Welcome to Star Wars</h2>} />
              <Route path='/people' element={<PeoplePage />}>
                <Route path=':id' element={<PeoplePage />}/>
              </Route>
              <Route path='/planets' element={<PlanetsPage />} />
              <Route path='/starships' element={<StarshipsPage />} />
              <Route path='/starships/:id' element={ <StarshipDetails />} />
              <Route path='/login' element={ <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin}/>} />
              <Route path='/secret' element={ <SecretPage isLoggedIn={isLoggedIn}/>} />
              <Route path='*' element={<h1>Page not found</h1>}/>
            </Routes>

          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    </div>
  );
};
export default App;
