import styled from 'styled-components'

export const SpacerContainer = styled.div`
  height: ${({ h }) => (h ? `${h}px` : '0px')};
  width: ${({ w }) => (w ? `${w}px` : '0px')};
`
