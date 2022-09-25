import React, { useState, useEffect }from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [query, setQuery] = useState('')
 
useEffect(() => {
  const fetchItems = async () => {
    const result = await axios.default.get(`https://gogoanime.herokuapp.com/search?keyw=${query}`)
    setItems(result.data)
    //console.log(items)
    setIsloading(false)

  }
    fetchItems();
}, [query])
  return (
    <div className="container">
     <Header />
     <Search getQuery= {(q) => setQuery(q)} />
     <CharacterGrid isLoading={isLoading} items ={items} /> 
    </div>
  );


  }

export default App;
