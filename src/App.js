import React from 'react';
import logo from './logo.svg';
import Button from './buttons/Button'
import NavBar from './navbar/Navbar'
import './App.css';

import styled from 'styled-components'


const Outer = styled.div `
  text-align: center;
`
const Header = styled.div `

background-color: #326b91;
> h1 {
  color: #efefe8;
}
> p {
  color: #efefe8;
}
> p: hover {
  color: black;
}
`
const Logo = styled.img `
  height: 40vh;
  animation: App-logo-spin infinite 20s linear;
  ${props => props.backwards && 'animation-direction: reverse;'}
`

function App() {
  return (
    <Outer>
      <Header >
        <Logo src={logo} alt="logo" />
        {/* <Logo backwards src={logo} alt="logo" /> */}
        <h1>Davide</h1>
        <p>
          styled-components workshop
        </p>
        
      </Header>
        <NavBar />
      <Button />
    
    </Outer>
  );
}

export default App;
