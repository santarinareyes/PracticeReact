import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectoryCategories } from '../../redux/directory/directory.selectors'
import { fetchCollectionsStart } from '../../redux/product/product.actions'
import CustomButton from '../custom-button/CustomButton'
import Spacer from '../spacer/Spacer'
import * as S from './styles'

const Admin = ({ fetchCollectionsStart, categories }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <S.AdminContainer>
      <S.ButtonContainer>
        <CustomButton>All Products</CustomButton>
        <Spacer w='10' />
        <CustomButton>Add Product</CustomButton>
      </S.ButtonContainer>

      {categories.map(({ id, title }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </S.AdminContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories,
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
