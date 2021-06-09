import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import APOD from './Components/APOD_Container';
import Description from './Components/Description_Container';
import { BASE_URL, API_KEY } from './Components/NASA-DATA';

const today = new Date();
const initialDate = today.toJSON().slice(0,10);

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(initialDate)

    useEffect(() => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}&date=`)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log('Houston, we have a problem', error)
      })
    }, [date]);

  return (
    <div className="App">
      {data && <APOD imageURL={data.url} altText={data.title} />}
      {data && <Description data={data} />}
      <input type='data' max={initialDate} onChange={e => setDate(e.target.value)}/>
    </div>
  );
}

export default App;
