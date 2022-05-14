import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
              <li><a href = "/">Home</a></li>
              <li><a href = "/SearchArticle">Select the Practice</a></li>
              <li><a href = "/SubmitArticle">Submit an Article</a></li>
          </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/SearchArticle" component={SearchArticle}/>
          <Route path="/SubmitArticle" component={SubmitArticle}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </div>
      </div>
      </Router>
  );
}

export default App;