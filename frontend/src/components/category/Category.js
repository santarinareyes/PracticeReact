import { withRouter } from 'react-router-dom'
import * as S from './styles'


const Category = ({ title, imageURL, size, history, UID, match }) => (
  <S.CategoryContainer
    size={size}
    onClick={() => history.push(`${match.url}${UID}`)}
  >
    <S.BackgroundImage className='background-image' imageURL={imageURL} />
    <S.Content className='content'>
      <S.Heading1>{title}</S.Heading1>
      <S.Text>SHOP NOW</S.Text>
    </S.Content>
  </S.CategoryContainer>
)

export default withRouter(Category)
