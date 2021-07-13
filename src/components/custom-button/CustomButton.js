import * as S from './styles'

const CustomButton = ({ children, ...props }) => (
  <S.CustomButtonContainer {...props}>{children}</S.CustomButtonContainer>
)

export default CustomButton
