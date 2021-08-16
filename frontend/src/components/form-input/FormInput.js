import './formInput.scss'



const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label && (
      <label
        className={`${otherProps.value.length && 'shrink'} form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
)

export default FormInput





/* 
<S.FormInputContainer = ({ handleChange, label, ...otherProps }) => (
  <S.InputContainer>
    <S.FormInput onChange={handleChange} {...otherProps} >
    {label && (
      <label
        className={`${otherProps.value.length && 'shrink'} form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
)

export default FormInput

 */