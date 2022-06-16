import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Fade from 'react-reveal/Fade'
function Content(bool , props){

  console.log("boolean show in Contents = " + bool.show)

    const[img,setImg]=useState(false);

  return (
    <Container show1={bool.show}>
        
        <Font className="scroll">
        <Fade top>
            <Profilecard show1={bool.show}>

                        <Card >

                                <img src="/protofolio/1622913462556.jpg"alt="not found" onMouseOut={()=>setImg(false)} onMouseOver={()=>setImg(true)} />

                               
                                 
                                  <Info show={img} show1={bool.show}>
                                  <Fade bottom>
                                    <h3>Name : kushagra mishra</h3>
                                    <h3>From : Lucknow , uttar pardesh</h3>
                                    <h3>Schooling : Kendriya vidyalaya aliganj lucknow</h3>
                                    <h3>Graduation : Bachelors of computer applications</h3>
                                    <h3>College : Graphic era "(deemed to be university)"</h3>
                                    <h3>College location : Dehradun , Uttrakhand</h3>
                                    <h3>Post graduation : Masters of computer application</h3>
                                    <h3>College : vishwakarma institute of technology</h3>
                                    <h3>College location : Pune , Maharashtra</h3>
                                    </Fade>
                                </Info>
                               
                               
                        </Card>


            </Profilecard>
            </Fade>



            </Font>
            <Main>      
            <Buttons>
              <Fade left>
            <Link to="/protofolio/Skills"><button className="button-85" role="button">Skills</button></Link>
            </Fade>
            <Fade top>
            <Link to="/protofolio/Skills"><button className="button-85" role="button">Projects</button></Link>
            </Fade>
            <Fade right>
            <Link to="/protofolio/Skills"><button className="button-85" role="button">Cerification</button></Link>
            </Fade>
           </Buttons>
            </Main>

    </Container>
  )
}

export default Content

const Card=styled.div`

display : flex;


`

const Container=styled.div`

background:${prop=>prop.show1 ? 'black' : 'white'};
color:${prop=>prop.show1 ? 'white' : 'black'};

.scroll{
       
        scroll-snap-align : start;

}

`

const Profilecard=styled.div`
img{
        box-shadow : -2px 1px 10px 6px ${prop=>prop.show1? 'white' : 'black'};
        display : flex;
        margin-top : 5%;
        opacity : 1;
        width:25%;
        margin-left : 25%;
        border-top-left-radius : 50%;
        transition : opacity 0.2s;

}
img:hover {

    opacity : 0.5;
}


`

const Info = styled.div`

display : ${prop=>prop.show ? 'flex' : 'none'};
flex-direction : column;
color : ${prop=>prop.show ? 'white' : 'black'}

font-family: 'Montserrat', sans-serif;
margin-top:5%;
margin-left:1%;
justify-content : space-between;

`;

const Main = styled.div`

margin : 2%;

margin-left:10%;
display : flex;
felx-direction : row;
scroll-snap-align:start;



`

const Font = styled.div`

height: 100vh;
scroll-snap-align:start;


`

const Buttons = styled.div`

display : flex;
felx-direction : row;
margin-left:%;
width : 30%;
height : 6%;


.button-85 {
  font-family: 'Montserrat', sans-serif;
  font-weight:550;
        margin-left:400%;
        padding: 0.6em 2em;
        border: none;
        outline: none;
        color: rgb(255, 255, 255);
        background: #111;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }
      
      .button-85:before {
        content: "";
        background: linear-gradient(
          45deg,
          #ff0000,
          #ff7300,
          #fffb00,
          #48ff00,
          #00ffd5,
          #002bff,
          #7a00ff,
          #ff00c8,
          #ff0000
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        -webkit-filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing-button-85 20s linear infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
      }
      
      @keyframes glowing-button-85 {
        0% {
          background-position: 0 0;
        }
        50% {
          background-position: 400% 0;
        }
        100% {
          background-position: 0 0;
        }
      }
      
      .button-85:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #222;
        left: 0;
        top: 0;
        border-radius: 10px;
      }
      



`
