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

  &:hover {
    cursor: ${({ hover }) => (hover ? 'pointer' : '')};
  }

  @media screen and (min-width: 800px) {
    font-size: 20px;
  }
`

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f3f3f3',
  },
}

export const ModalContainer = styled.div`
  position: relative;
  background-image: ${({ imageURL }) => `url(${imageURL})`};
  width: 50vw;
  height: 50vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 800px) {
    width: 70vw;
    height: 35vh;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  align-self: center;
  position: absolute;
  right: 0;
  top: 0;
`
