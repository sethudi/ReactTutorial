import React from 'react';
import BookLibrary from './BookLibrary';
import Book from './Book';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/edit/:id">
            <Book />
          </Route>

          <Route exact path="/">
            <BookLibrary />
          </Route>

          <Route path="/Create">
            <Book />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
