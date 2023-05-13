import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDark} = value

      const notFoundImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer isDark={isDark}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFoundImageUrl} alt="not found" />
              <NotFoundVideosHeading isDark={isDark}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
