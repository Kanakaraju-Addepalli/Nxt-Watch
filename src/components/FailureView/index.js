import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import {
  FailedViewContainer,
  FailedImage,
  Heading,
  Note,
} from './styledComponents'
import {RetryButton} from '../HomeVideoView/styledComponents'

const FailureView = props => {
  const {onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailedViewContainer>
            <FailedImage src={failureImageUrl} alt="failure view" />
            <Heading>Oops! Something Went Wrong</Heading>
            <Note>
              We are having some trouble to complete your request. Please try
              again.
            </Note>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default FailureView
