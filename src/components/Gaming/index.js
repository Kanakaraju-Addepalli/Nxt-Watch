import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import {
  GamingContainer,
  GamingVideoTitle,
  GamingText,
  GamingTitleIconContainer,
  LoaderContainer,
  GamingVideoList,
} from './styledComponents'
import GameCard from '../GameCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getGamingVideosData()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GameCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div>
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" isDark={isDark}>
                <GamingVideoTitle>
                  <GamingTitleIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingTitleIconContainer>
                  <GamingText>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderGamingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Gaming
