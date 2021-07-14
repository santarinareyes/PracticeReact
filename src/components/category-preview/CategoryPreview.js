import CategoryItem from '../category-item/CategoryItem'
import * as S from './styles'

const CategoryPreview = ({ title, items }) => (
  <S.CategoryPreviewContainer>
    <S.Heading1>{title.toUpperCase()}</S.Heading1>
    <S.PreviewItems>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
    </S.PreviewItems>
  </S.CategoryPreviewContainer>
)

export default CategoryPreview
