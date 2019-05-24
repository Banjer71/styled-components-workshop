import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components'
import NavBar from './navbar/Navbar'
import BlueText from './text/text'
import MainText from './text/MainText'
import image from './img/bluesRoad.jpg'

import './App.css';

import styled from 'styled-components'



const Outer = styled.div`
  text-align: center;
`

const Header = styled.div`
background-image: url(${image});
background-size: cover;
background-position: center;
height: 100vh;
background-color: #326b91;
  h1 {
  color: #efefe8;
}
p {
    color: #efefe8;
    font-size: 20px;
    padding: 10px;
}
p:hover {
    color: black;
}

  @media (max-width: 480px) {
    height: 20vh;
    background-size: cover;
    background-position: center;
  }
`
const Logo = styled.img`
  height: 30vh;
  animation: App-logo-spin infinite 20s linear;
  ${props => props.backwards && 'animation-direction: reverse;'}

  @media (max-width: 480px) {
    display: none;
  }
`

const theme = {
  font: 'Calibri'
};


function App() {
  return (
    <Outer>
      <Header >
        {/* <Logo src={logo} alt="logo" /> */}
        {/* <Logo backwards src={logo} alt="logo" /> */}
        {/* <h1>Davide</h1> */}
        {/* <h4>ReactJs</h4> */}
        {/* <p>
          styled-components workshop
        </p> */}
      </Header>
      {/* <NavBar /> */}
      {/* <ThemeProvider theme={theme}>
        <MainText>I am the one and only</MainText>
      </ThemeProvider> */}
      {/* <BlueText /> */}
    </Outer>
  );
}

export default App;
