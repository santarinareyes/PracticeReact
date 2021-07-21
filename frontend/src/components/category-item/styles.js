import styled from 'styled-components'
import CustomButton from '../custom-button/CustomButton'

export const CategoryItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 650px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.9;
    }

    button {
      display: flex;
    }
  }
`

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageURL }) => `url(${imageURL})`};
`

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  width: 10%;
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 525px;
  display: none;
  opacity: 0.9;
`
