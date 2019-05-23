import React from 'react';
import styled from 'styled-components';
//import Button from '../buttons/Button';


const Navbar = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;

    @media (max-width: 480px) {
        flex-direction: column;
        > li {
            max-width: 100%;
            outline: 1px solid red;
            
            > Button {
                width: 100%;
            }
        }

`
const Button = styled.button`
    background-color: ${props => props.primary ? 'lightgrey' :
                        props.custom ? 'purple' : 'purple'};
    color: ${props => props.uppercase ? 'red' : 'white'};
    width: 150px;
    //margin: 10px;
    padding: 15px;
    border: 2px solid white;
    border-radius: 4px;
    //box-shadow: 0 10px 20px #eee, 0 6px 6px #d5d5d5;
`

const MyButton = styled(Button)`
background-color: red;
`



function navbar() {
   
    return (
        <Navbar>
            <li><Button primary>Home</Button></li>
            <li><MyButton>Info</MyButton></li>
            <li><MyButton>Projects</MyButton></li>
        </Navbar>
    )
}

export default navbar

