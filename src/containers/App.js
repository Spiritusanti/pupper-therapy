import React, {useEffect, useState} from 'react';
import Dogs from '../components/Dogs';
// import SearchBar from '../components/SearchBar';
// `https://dog.ceo/api/breed/${breedName}/image/random/25`

const App = () => {

  const [dogImages, setDogs] = useState([]);
  console.log(dogImages)

  useEffect(()=> {
    getDogs();
  }, []);


  const getDogs = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/25");
    const data = await response.json();
    console.log(data)
    setDogs(data.message);
  }
 return(
      <div className='App'>
        <h1 className='header'>Pupper Therapy</h1>
        <h3>How it works:</h3>
        <p>Type in the name of the breed you are interested in 
          and hit search! You will get 25 images of good puppers back to gush over! 
        </p>
        <form className='search-form'>
          <input className='search-bar' type="text"/>
          <button className='submit'>search</button>
        </form>
        {dogImages.map(dogImage => (
          <Dogs image={dogImage}/>
    ))}
      </div>
  )
} 

export default App;
