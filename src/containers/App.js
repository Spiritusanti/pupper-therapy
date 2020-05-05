import React, {useEffect, useState} from 'react';
import Dogs from '../components/Dogs';
import './App.css';
// `https://dog.ceo/api/breed/${query}/image/random/25`

const App = () => {

  const [dogImages, setDogs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
 
  useEffect(() => {
    getDogs();
  }, [query]);


  const getDogs = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/25`);
    const data = await response.json();
    setDogs(data.message);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


 return(
      <div className='App'>
        <div className='header'>
          <h1>Pupper Therapy</h1>
            <h3>How it works:</h3>
            <p>Type in the name of the breed you are interested in 
              and hit search! You will get 25 images of good puppers back to gush over! 
            </p>
          <form onSubmit={getSearch} className='search-form'>
            <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
            <button className='submit'>search</button>
          </form>
        </div>
        <div className='image-grid'>
          {dogImages.map(dogImage => (
            <Dogs
              key={dogImage} 
              image={dogImage}
            />
          ))}
      </div>
      </div>
  )
} 

export default App;
