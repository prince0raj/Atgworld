import React from 'react'
import styled from 'styled-components'
import Articles from './Articles'
import Location from './Location'

const About = () => {
  return (
    <Wrap>
        <Articles/>
        <Location/>
    </Wrap>
  )
}

export default About

const Wrap=styled.div`
display:flex;
width: 84vw;
margin:0 auto;
justify-content:space-between;
@media (max-width:1121px){
  justify-content:center;
}
`
