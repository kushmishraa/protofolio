
import React from 'react'
import styled from 'styled-components'
import {Fade} from 'react-reveal'
import Switch from '@mui/material/Switch';
function Section(props) {

    console.log("boolean show in section = " + props.show)
    console.log("image="+ props.image)

    window.scrollTo(0,0);
    


  return (
   <Container show1={props.show} bgimg={props.image}  style={{backgroundImage: `url(${props.image})` , backgroundRepeat : 'no-repeat' , backgroundSize : 'cover' }}>
    <Main>  
            <Image>
                <Fade left>
                <img src={props.image2} alt="not found" />
                </Fade>
            </Image>


            <Topic>
            <Fade bottom>
            <br/><h1>{props.skillname}</h1><br/>
            <h2>Experience : {props.experience}</h2><br/>
            <h2>projects implemented : {props.projects}</h2><br/>
            <h2>Description : {props.description}</h2><br/>
            </Fade>
            </Topic>
    </Main>


   </Container>
  )
}

export default Section

const Container=styled.div` 

background-image: url("cpp.gif");
margin:auto%;
height : 120vh;
background : ${prop=>prop.show1 ? 'black' : 'white'};
color : ${prop=>prop.show1 ? 'white' : 'black'};
font-family: 'Montserrat', sans-serif;
@media only screen and (max-width: 430px){

  padding-top :20%;
  width:228%;
  height:205vh;

}
`

const Main=styled.div`

padding-top:2%;
display:flex;
flex-direction:column;
width:80%;
height:100;
align-items:center;

h2{
    margin:auto;
    justify-content : space-between;
    text-align : justify;


}


`
const Image=styled.div`

    img{
        
        margin-top:3%;
        width:60%;
        margin-left:15%;

        @media only screen and (max-width: 430px){

            width:100%;

        }

    }


`
const Topic=styled.div`
    width:50%;

    @media only screen and (max-width: 430px){

        font-size : x-large;
        width:100%;
        margin-left:20%;
      }

`
