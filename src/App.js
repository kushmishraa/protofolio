import './App.css';
import Header from './Component/Header';
import {  Routes , Route } from 'react-router-dom';
import Content from './Component/Content';
import Skills from './Component/Skills';
import styled from 'styled-components';
import { useState } from 'react';
import Switch from '@mui/material/Switch';

function App() {

  const [checked , setNight] = useState(false);

  console.log(checked);

  const handleonChange =(event) => {

      setNight(event.target.checked);
      console.log(checked);

  }

  return (
    <>
<Main show={checked}>
    
<Header show={checked}/>
    <Nightmode show={checked}>
      <label> night mode</label>
          <Switch
            checked={checked}
            onChange={handleonChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          </Nightmode>

    <Routes >
    <Route path='/protofolio/' exact element={<Content show={checked} />} />
    <Route path='/protofolio/Skills' exact element={<Skills show={checked} />} />
    </Routes>
  </Main>
  </>
  );
}

export default App;

const Main=styled.div`

background : white;

::-webkit-scrollbar {

  width: 10px;
}

::-webkit-scrollbar-thumb{

  background:black;

}

`

const Nightmode=styled.div`
padding-top:3%;
label{

  border-bottom : 1px solid black;

}
padding-left:3%;
margin-top:3%;
color:${prop=>prop.show? 'white' : 'black'};
background-color : ${prop=>prop.show ? 'black' : 'white'};
`

