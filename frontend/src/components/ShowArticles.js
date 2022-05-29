import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ArticleCard from './ArticleCard';

class ShowArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }

  componentDidMount() {
    axios
      .get('https://group4-assignment1b.herokuapp.com/api/articles')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticlesList');
      })
  };

  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;

    if(!articles) {
        articleList = "there is no book record!";
    } else {
        articleList = articles.map((article, k) =>
        <>
        <ArticleCard article={article} key={k} />
        <div>{article._id}</div>
        <button onClick={this.deleteArticle.bind(this,article._id)}>Delete me</button>
        </>
        
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Articles List</h2>
            </div>
          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }

  deleteArticle(id){
    axios.delete('https://group4-assignment1b.herokuapp.com/api/articles/'+id).then(res => { 
      window.location.href = `/ShowArticles`;
      ; 
      }) 
      .catch(err => { 
      console.log("Error form ShowBookDetails_deleteClick"); 
      }) 
      }; 
}



export default ShowArticles;