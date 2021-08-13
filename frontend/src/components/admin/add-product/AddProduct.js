import { useState } from 'react'
import FormInput from '../../form-input/FormInput'
import CustomButton from '../../custom-button/CustomButton'
import { selectCollectionsForPreview } from '../../../redux/product/product.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCollectionRef } from '../../../firebase/firebase.utils'
import { addProduct } from '../../../redux/product/product.actions'

const initialState = {
  title: '',
  name: '',
  price: '',
  imageURL: '',
}

const AddProduct = ({ collections, addProduct }) => {
  const [productInfo, setProductInfo] = useState(initialState)
  const { title, name, price, imageURL } = productInfo

  const handleChange = ({ target: { name, value } }) => {
    setProductInfo({ ...productInfo, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const generateUUID = () => {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      )
    }

    const items = {
      id: generateUUID(),
      imageURL,
      name,
      price: parseFloat(price),
    }

    addProduct({ title, items })
  }

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
        name='imageURL'
        value={imageURL}
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

const mapDispatchToProps = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
