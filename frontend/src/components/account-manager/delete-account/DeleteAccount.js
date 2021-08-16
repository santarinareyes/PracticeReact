import { useState } from 'react'
import CustomButton from '../../custom-button/CustomButton'
import Modal from 'react-modal'
import * as S from './styles'
import Spacer from '../../spacer/Spacer'
import { connect } from 'react-redux'
import { deleteUserStart } from '../../../redux/user/user.actions'

const DeleteAccount = ({ deleteUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleDeleteAccount = () => {
    alert('User deleted successfully.')
    deleteUser()
  }

  return (
    <>
      <CustomButton onClick={handleModal} inverted>
        Delete Account
      </CustomButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        contentLabel='Delete Account'
        style={S.modalStyles}
        ariaHideApp={false}
      >
        <S.ButtonContainer>
          <CustomButton onClick={handleDeleteAccount} inverted>
            Confirm Delete Account
          </CustomButton>
          <Spacer w='10' />
          <CustomButton onClick={handleModal}>Cancel</CustomButton>
        </S.ButtonContainer>
      </Modal>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteUser: () => dispatch(deleteUserStart()),
})

export default connect(null, mapDispatchToProps)(DeleteAccount)
