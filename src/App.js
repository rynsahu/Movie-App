import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar';
import Movie from './components/movies';
import Customer from './components/customers';
import Rental from './components/rentals';
import NotFound from './components/notFound';
import MovieDescription from './components/movieForm'

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies" exact component={Movie} />
          <Route path="/customers" component={Customer} />
          <Route path="/rentals" component={Rental} />
          <Route path="/movies/:id" exact component={MovieDescription} />
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
