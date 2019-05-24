import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';



const Navbar = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        }
`

// const MyButton = styled(Button)`
// background-color: green;
// ` 



function navbar() {
   
    return (
        <Navbar>
            <Button primary>Home</Button>
            <Button custom>Info</Button>
            <Button>Projects</Button>
        </Navbar>
    )
}

export default navbar

