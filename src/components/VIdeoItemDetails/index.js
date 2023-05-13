import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import {LoaderContainer} from '../Home/styledComponents'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import {VideoDetailViewContainer} from './styledComponents'
import VideoItem from '../VideoItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,

    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getVideoDetailsData()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderVideo = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <VideoItem
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        clickSaved={this.clickSaved}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideo()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
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
              <VideoDetailViewContainer
                data-testid="videoItemDetails"
                isDark={isDark}
              >
                {this.renderVideoDetails()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideoItemDetails
