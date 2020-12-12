import React, { useEffect, useState } from 'react';
import HeaderComponent from './components/header-component/header.component';
import ImageGrid from './components/image-grid/image-grid.component';
import './App.css';
// `https://dog.ceo/api/breed/${query}/image/random/25`

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    const fetchFunc = () => {fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json())
    .then(data => setImages(data.message))
    }
    fetchFunc();
  }, [setImages]);
    
    return ( 
      <div className='app'>
        <HeaderComponent onChange='' />
        <div className='grid-wrapper'>
          <ImageGrid images={images}/>
        </div>
      </div>
    )
  }

export default App;
