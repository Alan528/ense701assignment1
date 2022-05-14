import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
 } from "react-router-dom";
import Home from './pages/Home';
import SearchArticle from './pages/SearchArticle';
import SubmitArticle from './pages/SubmitArticle';
import NotFoundPage from './pages/404';

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li><NavLink exact to = "/">Home</NavLink></li>
          <li><NavLink to = "/SearchArticle">Search Article</NavLink></li>
          <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
        </ul>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/SearchArticle" component={SearchArticle}/>
        <Route path="/SubmitArticle" component={SubmitArticle}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Redirect to="/" />
      </div>
      </div>
      </Router>
 );
}
export default App;