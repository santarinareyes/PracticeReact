import styled from 'styled-components'

export const AccountContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const FormContainer = styled.div`
  display: ${({ clicked }) => (clicked ? 'block' : 'none')};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsInRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
