import React, {Component} from 'react';
import News from './News';

import CategorieButton from './CategorieButton';
const axios = require('axios');

class NewsPage extends Component {
  state = {
    articles:null,
    article:"",
    categorie:{"technology":"Technologie", "society":"Société","pop":"Pop","science":"Scientifique","economy":"Economie","gaming":"Gaming"}
  }
  componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4de4ab5424a84a5a9bf87ab812c2aab1')
    .then(response => {
      // handle success
      console.log(response.data)
      this.setState({articles: response.data.articles})
    })
    .catch(function (error) {
      // handle errora
      console.log(error);
    })
  }
  handleArticle = url => {
    this.state.articles.reduce((result, item) => {
      if (item.url === url) {result = item}
      if (result){
        this.setState({article: result})
      }
    }, null);
  }
  
  render() {
    const {articles, article, categorie} = this.state
    console.log(this.state.article)
    if (article) {
      return <Article article={article}/>
    }
    return (
      <div>
        <h1>News Page</h1>
        <div className="d-flex">
          <div className="col-7">
            
            {(articles) ? Object.keys(articles).map(i => <News handleArticle={this.handleArticle} key={i} article={articles[i]}/>) : null}
          </div>
          <div className="col-4 mt-5">
            {(categorie) ? Object.keys(categorie).map(i => <CategorieButton key={i} name={categorie[i]} />) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default NewsPage;

const Article = ({article}) => {
  return (
    <div className="col-12 d-flex whiteBg mx-4 my-2 p-5 ">
      <section className="col-7">
        <h1>{article.title}</h1>
        <p>Par {(article.author) ? article.author : "Inconnu"}</p>
        <p>{(article.content) ? article.content : "Texte non disponible"}</p>
      </section>
      <section className="qr-code col-4">

      </section>
    </div>
  );
};
