import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`

export const ItemsContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const EmptyMessage = styled.span`
  color: grey;
  font-size: 18px;
  margin: auto;
`
