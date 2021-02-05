import styled from "styled-components"

export const boxCart = styled.div`
  
  width: 200px;
  height: 150px;
  left: 50%;
  top: 50%;
  border: 1px solid black;
  margin: -75px 0 0 -75px;
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  display: ${active ? 'flex' : 'none'};
  flex-direction: column
`


  