import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import NavigationBar from '../NavigationBar'
import {
  TrendingContainer,
  TrendingVideoTitle,
  TitleIconContainer,
  TrendingText,
  TrendingVideoList,
} from './styledComponents'
import {LoaderContainer} from '../Home/styledComponents'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideoData()
  }

  getTrendingVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
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
    this.getTrendingVideoData()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideos = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideoList>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
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
            <>
              <Header />
              <NavigationBar />
              <TrendingContainer data-testid="trending" isDark={isDark}>
                <TrendingVideoTitle>
                  <TitleIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <TrendingText isDark={isDark}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Trending
