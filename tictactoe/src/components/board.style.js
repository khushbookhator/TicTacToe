import styled from 'styled-components'


export const BoardDiv  = styled.div`
    border: 2px solid black;
    width: 300px;
    height:300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
`