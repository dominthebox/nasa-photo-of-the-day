import React, { useState, useEffect } from "react";
import "./App.css";
import APOD from "./Components/APOD_Container";
import Description from "./Components/Description_Container";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Components/NASA-DATA";
// https://api.nasa.gov/planetary/apod?api_key=X6aUVNjllAgcZuv6MDIMdUVUTC9l5Wx5SHjqGXPi <-- end point

const today = new Date();
const initialDate = today.toJSON().slice(0,10);

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(initialDate);
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setData(res.data);
    });
  }, [date]);

  return (
    <div className="App">
        {data && <APOD imageURL={data.url} altText={data.title} />}
        {data && <Description data={data}/>}
        <input type="data" max={initialDate} onChange={e => setDate(e.target.value)}/>
    </div>
  );
}

export default App;
