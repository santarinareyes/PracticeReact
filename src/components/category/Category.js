import { withRouter } from 'react-router-dom'

import * as S from './styles'
import './category.scss'

const Category = ({ title, imageURL, size, history, UID, match }) => (
  <S.CategoryContainer
    size={size}
    onClick={() => history.push(`${match.url}${UID}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageURL})` }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='shop-now'>SHOP NOW</span>
    </div>
  </S.CategoryContainer>
)

export default withRouter(Category)
