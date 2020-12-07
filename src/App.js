import React from 'react';
import HeaderComponent from './components/header-component/header.component';
import ImageGrid from './components/image-grid/image-grid.component';
// import URLS from './components/image-grid/imageURLS';
import './App.css';
// `https://dog.ceo/api/breed/${query}/image/random/25`

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      images: []
    }
  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json())
    .then(data => this.setState({images: data.message}))
    .then(console.log(this.state))
  }

  render() { 
    const { images } = this.state
    return ( 
      <div className='app'>
        <HeaderComponent onChange='' />
        <div className='grid-wrapper'>
          <ImageGrid images={images}/>
        </div>
      </div>
    )
  }
} 

export default App;
