import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import{Link} from 'react-router-dom';
import Switch from '@mui/material/Switch';



function Header(bool) {

  const [Rightmenu , setburgerstate] = useState(false)

  


  
  return (

   
   <Container show1={bool.show}>
    
    <Msg>
      Hello peeps !
    </Msg>
  
    <Sign show1={bool.show}>
    <Link to="/">
      Kushagra mishra
      </Link>
    </Sign>
   

      <Menu >

        <p onClick={()=>setburgerstate(true)}>=</p>
 
      </Menu>

      <Menucontent show={Rightmenu} show1={bool.show}>

          <Closewrapper show1={bool.show}>
            <h2 onClick={()=>setburgerstate(false)}>X</h2>
            
          </Closewrapper>

        <ul>
          <li><a href='https://www.linkedin.com/in/kushagra-mishra-101626147/'>linkedin</a></li>
          <li><a href='https://github.com/kushmishraa'>github</a></li>
          <li><a href='https://instagram.com/_kush_mishra_'>instagram</a></li>
          <li>youtube</li>    
        </ul>

      </Menucontent>
     </Container>
  )
}

export default Header

const Container=styled.div`
  
    display : flex;
    position : fixed;
    min-height:0px;
    align-items: center;
    z-index:1;
    background:${prop=>prop.show1 ? 'black' : 'white'};
    color:${prop=>prop.show1 ? 'white' : 'black'};
    padding:1%;
    border-bottom : 1px solid white;
    box-shadow : 2px 7px 8px 2px ${prop=>prop.show1 ? 'white' : 'black'};
top: 0;
right: 0;
left: 0;
@media(max-width:600px){

  color : red;

}
`
const Msg=styled.div`
@media(max-width:600px){
  
  
}`

const Menu=styled.div`

display:flex;
top: 0;
bottom: 0;
right:0;
align-items: center;
margin-left:auto;
cursor : pointer;

`

const Menucontent = styled.div`

  top: 0;
  bottom: 0;
  border-left:1px black;
  overflow:hidden;
  box-shadow: -5px 7px 8px; ;
  right:0;
  width: 300px;
  ul{list-style: none;}
  padding : 20px;
  position:fixed;
  text-align: start;
  transition: transform 0.2s ease-in;
  transform : ${props=>props.show ? 'translateX(0%)' : 'translateX(100%)'};
  z-index:16;
  background:${prop=>prop.show1 ? 'black' : 'white'};
  li{
    text-align: center;
    padding : 7%;
   border-bottom : 1px solid grey;
    color:${prop=>prop.show1 ? 'white' : 'black'}
  };

  a{
    color:${prop=>prop.show1 ? 'white' : 'black'};
    text-decoration: none;
  }

  li:hover{

    border-bottom : 1px black;
    box-shadow:5px 8px 10px grey;

  }




`

const Closewrapper=styled.div`

cursor : pointer;

h2{color:${prop=>prop.show1 ? 'white' : 'black'};
margin-left:98%;}
`

const Sign = styled.div
`
  margin-left:38%;
  font-family: 'Dancing Script', cursive;

  a{

    color : ${prop=>prop.show1? 'white' : ' black '};
    text-decoration : none;

  }

`