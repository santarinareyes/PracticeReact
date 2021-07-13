import styled, { css } from 'styled-components'

const defaultStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`

const googleSignIn = css`
  background-color: rgba(0, 0, 255, 0.623);
  color: white;

  &:hover {
    background-color: rgba(0, 102, 255, 0.623);
    border: none;
  }
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignIn
  }

  return props.inverted ? invertedButton : defaultStyle
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`
