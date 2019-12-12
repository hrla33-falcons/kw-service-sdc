import React from 'react';
import axios from 'axios';
import Cabeza from './cabeza.jsx';
import SearchBar from './searchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flasher: "",
    }
    this.flasher = this.flasher.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    axios.get(`/allProducts`)
    .then(({data}) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
  }

  flasher() {
    var lightning = ['categories', 'content', 'products'];
    var counter = 0;
    setInterval(() => {
      this.setState({
        flasher: lightning[counter],
      })
      counter++;
      if (counter === 3) {
        counter = 0;
      }
    }, 3000);
  }

  componentDidMount() {
    this.flasher();
    this.getProducts();
  }

  render() {
    return (
      <div class="sb-searchbar">
          <Cabeza />
          <div class="searchbar-div" data-namespace="search-box-overlay"></div>
          <SearchBar flasher={this.state.flasher}/>
      </div>
    )
  }
}

export default App;