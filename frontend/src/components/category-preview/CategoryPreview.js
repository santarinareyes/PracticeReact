import CategoryItem from '../category-item/CategoryItem'
import { withRouter } from 'react-router-dom'
import * as S from './styles'

const CategoryPreview = ({ title, items, match, history }) => (
  <S.CategoryPreviewContainer>
    <S.Heading1
      onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >
      {title}
    </S.Heading1>
    <S.PreviewItems>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
    </S.PreviewItems>
  </S.CategoryPreviewContainer>
)

export default withRouter(CategoryPreview)
