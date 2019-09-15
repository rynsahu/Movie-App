import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import NavBar from "./components/navBar";
import Movie from "./components/movies";
import Customer from "./components/customers";
import Rental from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/login";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route
              path="/movies"
              exact
              render={props => <Movie {...props} user={user} />}
            />
            <Route path="/customers" component={Customer} />
            <Route path="/rentals" component={Rental} />
            <ProtectedRoute
              path="/movies/:id"
              component={MovieForm}
              RedirectTo="/login"
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
