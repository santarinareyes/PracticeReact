import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/product/product.actions'
import CustomButton from '../custom-button/CustomButton'
import Spacer from '../spacer/Spacer'
import * as S from './styles'
import { default as AllProducts } from './all-products/AllProducts.container'
import AddProduct from './add-product/AddProduct'

const buttonInitial = {
  allProducts: false,
  addProduct: false,
}

const Admin = ({ fetchCollectionsStart }) => {
  const [buttonClicked, setButtonClicked] = useState(buttonInitial)

  const handleButtonClicked = ({ target: { name } }) => {
    setButtonClicked({
      ...buttonClicked,
      [name]: !buttonClicked[name],
    })
  }

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <S.AdminContainer>
      <S.ButtonContainer>
        <CustomButton name='allProducts' onClick={handleButtonClicked}>
          All Products
        </CustomButton>
        <Spacer w='10' />
        <CustomButton name='addProduct' onClick={handleButtonClicked}>
          Add Product
        </CustomButton>
      </S.ButtonContainer>
      <S.AddProductContainer clicked={buttonClicked.addProduct}>
        <AddProduct />
      </S.AddProductContainer>
      <S.ProductsContainer clicked={buttonClicked.allProducts}>
        <AllProducts />
      </S.ProductsContainer>
    </S.AdminContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(Admin)
