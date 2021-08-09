import { useState } from 'react'
import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'

const ContactPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails({ ...userDetails, [name]: value })
  }

  return (
    <S.ContactContainer>
      <form>
        <FormInput
          onChange={handleChange}
          type='text'
          name='name'
          value={userDetails.name}
          label='Name'
          required
        />
        <FormInput
          onChange={handleChange}
          type='email'
          name='email'
          value={userDetails.email}
          label='Email'
          required
        />
        <FormInput
          onChange={handleChange}
          type='text'
          name='message'
          value={userDetails.message}
          label='Message'
          required
        />
      </form>
      <CustomButton>Send</CustomButton>
    </S.ContactContainer>
  )
}

export default ContactPage
