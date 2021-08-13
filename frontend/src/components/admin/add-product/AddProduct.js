import { useState } from 'react'
import FormInput from '../../form-input/FormInput'
import CustomButton from '../../custom-button/CustomButton'

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({})

  const handleChange = () => {}

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Add Product</h2>
      <FormInput
        onChange={handleChange}
        type='text'
        name='name'
        value=''
        label='Product Name'
        required
      />
      <FormInput
        onChange={handleChange}
        type='number'
        name='price'
        value=''
        label='Product Price'
        required
      />
      <FormInput
        onChange={handleChange}
        type='text'
        name='image'
        value=''
        label='Image URL'
        required
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '40px',
        }}
      >
        <CustomButton>Confirm Product</CustomButton>
      </div>
    </div>
  )
}

export default AddProduct
