import styled from 'styled-components'

export const SignInOrSignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 66%;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`
