import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
 } from "react-router-dom";
import Home from './pages/Home';
import SearchArticle from './pages/SearchArticle';
import SubmitArticle from './pages/SubmitArticle';
import About from './pages/about';
import NotFoundPage from './pages/404';
import ShowArticles from './components/ShowArticles';
import SubmissionForm from './components/SubmissionForm';
import ContactForm from './components/ContactForm';

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li><a href= "/">Home</a></li>
          <li><a href = "/SearchArticle">Search Article</a></li>
          <li><a href = "/SubmitArticle">Submit an Article</a></li>
          <li><a href = "/ShowArticles">ShowArticles</a></li>
          <li style={{float: "right"}}><a href = "/ContactForm">Contact Us</a></li>
          <li style={{float: "right"}}><a href = "/About">About Us</a></li>
        </ul>
      <div className="content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/SearchArticle" component={SearchArticle}/>
        <Route path="/SubmitArticle" component={SubmitArticle}/>
        <Route path="/ContactForm" component={ContactForm}/>
        <Route path="/About" component={About}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Route exact path='/ShowArticles' component={ShowArticles} />
        <Route path='/create-article' component={SubmissionForm} />
        <Redirect to="/" />
      </Switch>
      </div>
      </div>
      </Router>
 );
}
export default App;