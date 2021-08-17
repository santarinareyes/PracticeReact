import styled from 'styled-components'

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  &:hover {
    cursor: pointer;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
