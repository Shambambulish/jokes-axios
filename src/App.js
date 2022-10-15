import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'https://api.jokes.one/jod';

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        const joke = response.data.contents.jokes[0].joke;
        setTitle(joke.title);
        setText(joke.text);
        setDate(response.data.contents.jokes[0].date);
      })
  } 
  ,[])


  return (
    <div style={{margin:50}}>
      <h1>Joke of the day ({date})</h1>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
