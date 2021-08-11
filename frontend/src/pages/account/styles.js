import styled from 'styled-components'

export const AccountContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`

export const NewPasswordContainer = styled.div`
  display: ${({ clicked }) => (clicked ? 'block' : 'none')};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddProductContainer = styled.div`
  display: ${({ clicked }) => (clicked ? 'block' : 'none')};
`
