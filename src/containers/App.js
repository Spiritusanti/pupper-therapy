import React, { Component } from 'react';
import Position from '../components/Position'

class App extends Component {
  constructor(){
    super()
    this.state = {
      time: [],
      latitude: [],
      longitude: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/iss-now.json').then(response => {
      return response.json()
    }).then(iss-now => {
      this.setState({ time, latitude, longitude });
    });
  }
}

export default App;
