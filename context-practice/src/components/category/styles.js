import styled from 'styled-components'

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: all 0.1s;
    }

    & .content {
      opacity: 0.9;
    }
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageURL }) => `url(${imageURL})`};
`

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const Heading1 = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`

export const Text = styled.span`
  font-weight: lighter;
  font-size: 16px;
`
