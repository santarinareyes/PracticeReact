import styled from 'styled-components'

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 34px;
`

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`

export const Text = styled.h3`
  padding: 0;
  margin: 0;
  width: 24%;
  display: flex;
  justify-content: center;
  font-size: 16px;

  @media screen and (min-width: 800px) {
    font-size: 20px;
  }
`
