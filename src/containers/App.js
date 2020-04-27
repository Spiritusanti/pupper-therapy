import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';


class App extends Component {
  constructor() {
    super()
    this.state = {
      breed: [],
      searchfield: "",
    }
  }
  
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {return response.json();
    }).then(list => {
      this.setState({breed: list});
    });
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value });
  }
  
  
  render() {
    const { breed, searchfield } = this.state;
    const filterBreed = breed.filter(dogs => {
      return dogs.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !breed.length ?
      <h1>loading...</h1>:
    (
     <div>
      <h1>Hello</h1>
      <SearchBar searchChange = {this.onSearchChange}/>
      <ul>breed={filterBreed}</ul>
    </div>
    )}
}

export default App;
