import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectoryCategories } from '../../redux/directory/directory.selectors'

import Category from '../category/Category'

import * as S from './styles'

const Categories = ({ shopCategories }) => (
  <S.CategoriesContainer>
    {shopCategories.map(({ id, ...otherProps }) => (
      <Category key={id} {...otherProps} />
    ))}
  </S.CategoriesContainer>
)

const mapStateToProps = createStructuredSelector({
  shopCategories: selectDirectoryCategories,
})

export default connect(mapStateToProps)(Categories)
