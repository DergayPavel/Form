import styled from 'styled-components'

export const Text1 = styled.div<{st: string}>`
    width:100%;
    font-size: ${({st})=> st==='custom'? '20px':'15px'};
    display: flex;
    flex-direction:${({st})=> st==='custom'? 'row':'column'};
    justify-content: space-around;
    align-items: center;
`