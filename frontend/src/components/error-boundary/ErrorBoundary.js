import { Component } from 'react'
import * as S from './styles'

class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      hasError: false,
      imageUrl: 'https://i.imgur.com/lKJiT77.png',
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log('error', error)
    console.log('info', info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.ErrorImageOverlay>
          <S.ErrorImageContainer imageUrl={this.state.imageUrl} />
          <S.ErrorImageText>
            A Dog Ate this Page Your dog is cute but honestly a menace. Where
            are my shoes? Where is my graduation certificate? Where is the
            chocolate cake I baked for my Aunt’s birthday? And why did you take
            your dog to the vet on that same Thursday?!
          </S.ErrorImageText>
        </S.ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
