import styled from 'styled-components';
import {css} from 'styled-components';



export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`
 

export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    @include shrinkLabelStyles();
  }
}`

export const InputContainer =styled.input`
position: relative;
margin: 45px 0;
`

export const Input = styled.div`
input[type='password'] {
  letter-spacing: 0.3em;
}
`

export const FormInputLabel = styled.div`

  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}}
`



const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
