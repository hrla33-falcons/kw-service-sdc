import React from 'react';
import axios from 'axios';
import Cabeza from './cabeza.jsx';
import SearchBar from './searchBar.jsx';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flasher: '',
      searchText: '',
      barOpen: false,
      suggestions: [],
      slicedSugs: [],
      articles: []
    };

    this.flasher = this.flasher.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.searchType = this.searchType.bind(this);
    this.barToggle = this.barToggle.bind(this);
    this.suggestedArticles = this.suggestedArticles.bind(this);
  }

  barToggle() {
    this.setState({
      barOpen: !this.state.barOpen
    });
  }

  searchType(e) {
    this.setState({
      searchText: e.target.value
    });
    this.getProducts(e.target.value);
    // if (this.state.searchText.length === 0) {
    //   this.flasher();
    // }
  }

  getProducts(query) {
    if (query === undefined) {
      query = 'a';
    }
    axios
      .get(`/searchbar/${query}`)
      .then(({ data }) => {
        var slug = data.slice(0, 4);
        this.setState(
          {
            suggestions: data,
            slicedSugs: slug
          },
          this.suggestedArticles(data.slice(0, 6))
        );
        // console.log(this.state.suggestions);
      })
      .catch(err => console.error(err));
  }

  suggestedArticles(arr) {
    var articles = [];
    for (var product of arr) {
      var articleTitle = product.relatedarticle;
      articles.push(articleTitle.substring(0, articleTitle.length - 1)); // get rid of the period in each sentence
    }
    this.setState({
      articles
    });
  }

  flasher() {
    var lightning = ['categories', 'content', 'products'];
    var counter = 0;
    setInterval(() => {
      this.setState({
        flasher: lightning[counter]
      });
      counter++;
      if (counter === 3) {
        counter = 0;
      }
    }, 3000);
  }

  componentDidMount() {
    this.flasher();
    this.getProducts('a');
  }

  render() {
    return (
      <div className='sb-searchbar'>
        <Cabeza />
        <div data-namespace='search-box-overlay'></div>
        <SearchBar
          sliced={this.state.slicedSugs}
          articles={this.state.articles}
          suggestions={this.state.suggestions}
          flasher={this.state.flasher}
          searchType={this.searchType}
          searchText={this.state.searchText}
          show={this.state.barOpen}
          onClose={this.barToggle}
        />
      </div>
    );
  }
}

export default App;
