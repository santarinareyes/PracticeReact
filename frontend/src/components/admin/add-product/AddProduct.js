import { useEffect, useState } from 'react'
import FormInput from '../../form-input/FormInput'
import CustomButton from '../../custom-button/CustomButton'
import {
  selectCollectionError,
  selectCollectionsForPreview,
} from '../../../redux/product/product.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { addProduct } from '../../../redux/product/product.actions'
import * as S from './styles'

const initialState = {
  title: '',
  name: '',
  price: '',
  imageURL: '',
}

const AddProduct = ({ collections, addProduct, errorMessage }) => {
  const [productInfo, setProductInfo] = useState(initialState)
  const { title, name, price, imageURL } = productInfo

  useEffect(() => {
    if (!errorMessage) return

    alert(errorMessage)
  }, [errorMessage])

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
    alert('Product added successfully')
    setProductInfo(initialState)
  }

  return (
    <S.AddProductContainer>
      <S.Header2>Add Product</S.Header2>
      <S.SelectCollectionContainer>
        <S.SelectDropdown onChange={handleChange} id='title' name='title'>
          <option value='none'>Choose collection</option>
          {collections &&
            collections.map(({ title }) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
        </S.SelectDropdown>
      </S.SelectCollectionContainer>
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
      <S.ButtonContainer>
        <CustomButton onClick={handleSubmit}>Submit Product</CustomButton>
      </S.ButtonContainer>
    </S.AddProductContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  errorMessage: selectCollectionError,
})

const mapDispatchToProps = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
