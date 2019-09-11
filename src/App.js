import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar';
import Movie from './components/movies';
import Customer from './components/customers';
import Rental from './components/rentals';
import MovieDescription from './components/movieForm'
import NotFound from './components/notFound';
import LoginForm from './components/login'
import RegisterForm from './components/registerForm';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/login" exact component={LoginForm} />
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
