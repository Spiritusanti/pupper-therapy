import React, { Component } from 'react';
import Puppy from '../components/Puppy'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/hound/images')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items: result.items
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
         <ul>
           <Puppy />
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.image}
            </li>
          ))}
        </ul>
      );
    }
  }

}

export default App;
