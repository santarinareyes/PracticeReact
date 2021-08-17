import { useState } from 'react'
import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'
import { createContactsDoc } from '../../firebase/firebase.utils'

const ContactPage = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = contactDetails

  const handleChange = ({ target: { name, value } }) => {
    setContactDetails({ ...contactDetails, [name]: value })
  }

  const handleSubmit = e => {
    if (!name || !email || !message) {
      alert('All fields must be filled')
      return
    }

    createContactsDoc(contactDetails)
    e.preventDefault()
  }

  return (
    <S.ContactContainer>
      <form>
        <FormInput
          onChange={handleChange}
          type='text'
          name='name'
          value={contactDetails.name}
          label='Name'
          required
        />
        <FormInput
          onChange={handleChange}
          type='email'
          name='email'
          value={contactDetails.email}
          label='Email'
          required
        />
        <FormInput
          onChange={handleChange}
          type='text'
          name='message'
          value={contactDetails.message}
          label='Message'
          required
        />
      </form>
      <CustomButton onClick={handleSubmit}>Send</CustomButton>
    </S.ContactContainer>
  )
}

export default ContactPage
