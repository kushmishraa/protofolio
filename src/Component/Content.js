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
                                <Fade top>
                                <img src="/protofolio/1622913462556.jpg"alt="not found" onMouseOut={()=>setImg(false)} onMouseOver={()=>setImg(true)} />
                                </Fade>
                               
                                 
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

                        <Info2 show={img} show1={bool.show}>
                                  <Fade right>
                                    <h3>Name : kushagra mishra</h3>
                                    </Fade>
                                    <Fade left>
                                    <h3>From : Lucknow , uttar pardesh</h3>
                                    </Fade>
                                    <Fade right>
                                    <h3>Schooling : Kendriya vidyalaya aliganj lucknow</h3>
                                    </Fade>
                                    <Fade left>
                                    <h3>Graduation : Bachelors of computer applications</h3>
                                    </Fade>
                                    <Fade right>
                                    <h3>College : Graphic era "(deemed to be university)"</h3>
                                    </Fade>
                                    <Fade left>
                                    <h3>College location : Dehradun , Uttrakhand</h3>
                                    </Fade>
                                    <Fade top>
                                    <h3>Post graduation : Masters of computer application</h3>
                                    </Fade>
                                    <Fade bottom>
                                    <h3>College : vishwakarma institute of technology</h3>
                                    </Fade>
                                    <Fade top>
                                    <h3>College location : Pune , Maharashtra</h3>
                                    </Fade>
                                </Info2>


            </Profilecard>
            </Fade>



            </Font>
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
height:100vh;
padding-bottom:5%;

.scroll{
       
        scroll-snap-align : start;

}

@media only screen and (max-width: 430px){

  padding-top :20%;
  width:228%;
  height:205vh;
  padding-bottom:5%;

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

@media only screen and (max-width : 430px){


  img{
    margin-left:15%;
    width:70%;
  
  }

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

@media screen and ( max-width: 430px){
  
display : none;

}

`

const Font = styled.div`

height: 100vh;
scroll-snap-align:start;


`



const Info2 = styled.div`

display:none;
@media only screen and (max-width : 430px){

  display : ${prop=>prop.show ? 'initial' : 'none'};
  width :  ${prop=>prop.show ? '60%' : '0%'};

  font-size : x-large;
  h3{
    width:75%;
    margin-top:2.5%;
    margin-left:15%;
    font-family: 'Montserrat', sans-serif;
  }

}

`
