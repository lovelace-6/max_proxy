import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Authors = () => {
  return (
    <Switch>
        <Route path="/books/:id" component={App}/>
        {/* <Route path="/books/:id/a/:authorId" component={App}/>
        <Route path="/" component={App}/> */}
    </Switch>
  )
}


ReactDOM.render((
  <Router>
    <Authors />
  </Router>
), document.getElementById('authors'));
