import * as S from './styles'

const WithSpinner =
  WrappedComponent =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }

export default WithSpinner
