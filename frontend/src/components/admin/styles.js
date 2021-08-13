import styled from 'styled-components'

export const AdminContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid grey;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ProductsContainer = styled.div`
  display: ${({ clicked }) => (clicked ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AddProductContainer = styled.div`
  display: ${({ clicked }) => (clicked ? 'flex' : 'none')};
`
