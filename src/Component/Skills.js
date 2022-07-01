import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Switch from '@mui/material/Switch';

function Skills( bool) {
  return (
      <Container show1={bool.show}>
          <Section 

            skillname={"c++ programming"}
            experience={"2 years +"}
            projects = {" Created a local garage management system using cpp and oops concepts at college major project"}
            description = {"Started using this language as my base language for practice and development , learnt the concepts of coding and programming through this language you might be getting a question why i choose this language , i choose this language over any other language because of the oops concepts and the syntax of c++ is so familiar to me and i love to code programs in c++ but it doesnt bounded me to use other programming languages as the key for any other programming language is cpp !"}
            image2={"/protofolio/cpp2.gif"}
            show={bool.show}
          
          />
           <Section 

            skillname={"java programming"}
            experience={"1 years "}
            projects = {"No projects till now based on java programming"}
            description = {"Started learning java as an another language that taken my intrests , I basically used java for solving online coding questions on hackerrank and others"}
            image2={"/protofolio/java.gif"}
            show={bool.show}

            />
             <Section 

              skillname={"SQL"}
              experience={"2 years +"}
              projects = {"Created 2-3 projects for college main projects that used concepts of MySql and databases "}
              description = {"Started learning java as an another language that taken my intrests , I basically used java for solving online coding questions on hackerrank and others"}
              image2={"/protofolio/sql.gif"}
              show={bool.show}

              />
              <Section 

                skillname={"Data structres and algorithms"}
                experience={"1 years "}
                projects = {"Created ticket counter system for college project "}
                description = {"As per current development trends all the companies requires data structres and algorithm for its core concept and to judge a candidates problem solving capabilites ,Im currently having 4* at hackerrank ."}
                image2={"/protofolio/dsa.gif"}
                show={bool.show}

/>
      </Container>
  )
}

export default Skills

const Container=styled.div`
color : white;
background:${prop=>prop.show1 ? 'black' : 'white'};

`