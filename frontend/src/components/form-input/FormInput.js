import './formInput.scss'
import * as S from './styles'

const FormInput = ({ handleChange, label, readOnly, ...otherProps }) => (
  <div className={`group ${readOnly ? 'readOnly' : ''}`}>
    <input
      className='form-input'
      onChange={handleChange}
      {...otherProps}
      readOnly={readOnly}
    />
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
