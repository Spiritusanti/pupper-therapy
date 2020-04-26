import React, { Component } from 'react';
import ImageList from '../components/ImageList'
import SearchBar from '../components/SearchBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dogs: [],
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch('https://dog.ceo/api/breed/${}/images/random/10').then(response => {
  //     return response.json();
  //   }).then(url => {
  //     this.setState({ dogs: url });
  //   })
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { dogs, searchfield } = this.state;
    const filterDogs = dogs.filter(dog => {
      return dog.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !dogs.length ?
    <h1>Loading...</h1>:
    (
      <div>
        <h1>Pupper Therapy</h1>
        <SearchBar searchChange={this.onSearchChange}/>
      </div>
    )
  }
}
export default App;
