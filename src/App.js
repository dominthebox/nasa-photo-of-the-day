import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import APOD from './Components/APOD_Container';
import Description from './Components/Description_Container';
import { BASE_URL, API_KEY } from './Components/NASA-DATA';
import styled from 'styled-components';

const today = new Date();
const initialDate = today.toJSON().slice(0,10);

const StyledInput = styled.input`
  margin-bottom: 3.5rem;
  margin-top: 2rem;
  border-radius: 3rem;
  border-color: blueviolet;
  border-width: 0.5rem;
`
const StyledDiv = styled.div`
    background-color: #404040;
`

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
    <StyledDiv className="App">
      {data && <APOD imageURL={data.url} altText={data.title} />}
      {data && <Description data={data} />}
      <StyledInput type='data' max={initialDate} onChange={e => setDate(e.target.value)}/>
    </StyledDiv>
  );
}

export default App;
