import { useState } from 'react'
import Spacer from '../../../spacer/Spacer'
import * as S from './styles'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { deleteProduct } from '../../../../redux/product/product.actions'

const ProductItem = ({ collection: { items, title }, deleteProduct }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleDelete = ({ target: { id } }) => {
    deleteProduct({ collection: title, productId: id })
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
              <S.Text id={id} hover onClick={handleDelete}>
                Delete
              </S.Text>
            </S.ProductInfoContainer>
            <Spacer h='10' />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleModal}
              contentLabel={name}
              style={S.modalStyles}
              ariaHideApp={false}
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

const mapDispatchToProps = dispatch => ({
  deleteProduct: payload => dispatch(deleteProduct(payload)),
})

export default connect(null, mapDispatchToProps)(ProductItem)
