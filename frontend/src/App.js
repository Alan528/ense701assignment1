import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/Home';
import SearchArticle from './pages/SearchArticle';
import SubmitArticle from './pages/SubmitArticle';
import NotFound from './pages/404';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SearchArticle" component={SearchArticle} />
            <Route exact path="/SubmitArticle" component={SubmitArticle} />
            <Route exact path="/404" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;