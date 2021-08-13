import { useState } from 'react'
import Spacer from '../../../spacer/Spacer'
import * as S from './styles'
import Modal from 'react-modal'

const ProductItem = ({ collection: { items, title } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div>
      <S.Title>{title}</S.Title>
      <div>
        {items.map(({ name, id, price, imageURL }) => (
          <div key={id}>
            <S.ProductInfoContainer>
              <S.Text>{name}</S.Text>
              <S.Text>Price: {price} SEK</S.Text>
              <S.Text hover onClick={handleModal}>
                View image
              </S.Text>
              <S.Text hover>Edit</S.Text>
            </S.ProductInfoContainer>
            <Spacer h='10' />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleModal}
              contentLabel={name}
              style={S.modalStyles}
            >
              <S.ModalContainer imageURL={imageURL}>
                <S.RemoveButtonContainer onClick={handleModal}>
                  &#10005;
                </S.RemoveButtonContainer>
              </S.ModalContainer>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductItem
