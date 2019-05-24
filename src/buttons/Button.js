import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.primary ? 
                            'grey' : 
                                props.custom ? 
                                    'palevioletred' : 
                                    'blue'};
    color: ${props => props.color ? 'red' : 'white'};
    width: 150px;
    margin: 10px;
    padding: 15px;
    border: 2px solid grey;
    border-radius: 4px;
    box-shadow: 0 10px 20px #eee, 0 6px 6px #d5d5d5;

        @media (max-width: 480px) {
            width: 100%;
            margin: 1px;
        }
`



// function button() {
//     return (
//         <Button>Press Me!</Button>
//     )
// }

export default Button
