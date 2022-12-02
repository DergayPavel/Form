import styled from 'styled-components'

export const Button = styled.button<{state: boolean}>`

    width:100%;
    height:40px;

    border:none;
    border-radius:3px;
    background-color:${({state})=> state===true? 'blue':'gray'};
    color:white;
    font-size:18px;
`