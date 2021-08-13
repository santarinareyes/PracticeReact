import { useState } from 'react'
import FormInput from '../../form-input/FormInput'
import CustomButton from '../../custom-button/CustomButton'
import { selectCollectionsForPreview } from '../../../redux/product/product.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCollectionRef } from '../../../firebase/firebase.utils'

const initialState = {
  title: '',
  name: '',
  price: '',
  image: '',
}

const AddProduct = ({ collections }) => {
  const [productInfo, setProductInfo] = useState(initialState)
  const { title, name, price, image } = productInfo

  const handleChange = ({ target: { name, value } }) => {
    setProductInfo({ ...productInfo, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    getCollectionRef(title)
  }

  console.log('productInfo', productInfo)

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Add Product</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select
          style={{ padding: '10px' }}
          onChange={handleChange}
          id='title'
          name='title'
        >
          <option value='none'>Choose collection</option>
          {collections &&
            collections.map(({ title }) => (
              <option value={title}>{title}</option>
            ))}
        </select>
      </div>
      <FormInput
        onChange={handleChange}
        type='text'
        name='name'
        value={name}
        label='Product Name'
        required
      />
      <FormInput
        onChange={handleChange}
        type='number'
        name='price'
        value={price}
        label='Product Price'
        required
      />
      <FormInput
        onChange={handleChange}
        type='text'
        name='image'
        value={image}
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
        <CustomButton onClick={handleSubmit}>Submit Product</CustomButton>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(AddProduct)
