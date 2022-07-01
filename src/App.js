import './App.css';
import Header from './Component/Header';
import {  Routes , Route } from 'react-router-dom';
import Content from './Component/Content';
import Skills from './Component/Skills';
import styled from 'styled-components';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Metatags from 'react-meta-tags'

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
<Metatags>
<meta name='viewport' content="width=device-width,initial scale = 1.0" />
</Metatags>


    
<Header show={checked}/>
    <Nightmode show={checked}>
      <label> night mode</label>
          <Switch
            checked={checked}
            onChange={handleonChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          </Nightmode>

        <Content show={checked} />
        <Skills show={checked} />


{/* 
    <Routes >
    <Route path='/protofolio/' exact element={<Content show={checked} />} />
    <Route path='/protofolio/Skills' exact element={<Skills show={checked} />} />
    </Routes> */}
  </Main>
  </>
  );
}

export default App;

const Main=styled.div`

background : white;


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

@media only screen and (max-width : 430px){


  padding-top:22%;
  width:225%;

}
`

