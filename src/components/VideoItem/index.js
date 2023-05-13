import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import {
  VideoContainer,
  ResponsiveContainer,
  VideoTitle,
  VideoStatusContainer,
  ViewsAndPublishedContainer,
  Span,
  SocialButtonsContainer,
  BtnContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ProfileContainer,
  ProfileImg,
  ProfileContent,
  ProfileName,
  Subscribers,
  ChannelDescription,
  VideoPlayer,
  DetailsContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark, addVideo, savedVideos} = value
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

        let isSaved

        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : '#64748b'

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoContainer isDark={isDark}>
            <ResponsiveContainer>
              <VideoPlayer>
                <ReactPlayer
                  url={videoDetails.videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoPlayer>
              <DetailsContainer>
                <div>
                  <VideoTitle>{videoDetails.title}</VideoTitle>
                  <VideoStatusContainer>
                    <ViewsAndPublishedContainer>
                      {videoDetails.viewCount} views <Span>.</Span>{' '}
                      {videoDetails.publishedAt}
                    </ViewsAndPublishedContainer>
                    <SocialButtonsContainer>
                      <BtnContainer>
                        <SocialButton
                          type="button"
                          color={likeIconColor}
                          onClick={onClickLike}
                        >
                          <AiOutlineLike size={23} />
                          <ButtonText>Like</ButtonText>
                        </SocialButton>
                      </BtnContainer>
                      <BtnContainer>
                        <SocialButton
                          type="button"
                          color={dislikeIconColor}
                          onClick={onClickDislike}
                        >
                          <AiOutlineDislike size={23} />
                          <ButtonText>Dislike</ButtonText>
                        </SocialButton>
                      </BtnContainer>
                      <BtnContainer>
                        <SocialButton
                          type="button"
                          color={saveIconColor}
                          onClick={onClickSave}
                        >
                          <BiListPlus size={25} />
                          <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                        </SocialButton>
                      </BtnContainer>
                    </SocialButtonsContainer>
                  </VideoStatusContainer>
                  <HrLine />
                  <ProfileContainer>
                    <ProfileImg
                      src={videoDetails.profileImageUrl}
                      alt="channel logo"
                    />
                    <ProfileContent>
                      <ProfileName>{videoDetails.name}</ProfileName>
                      <Subscribers>
                        {`${videoDetails.subscriberCount} Subscribers`}
                      </Subscribers>
                    </ProfileContent>
                  </ProfileContainer>
                  <ChannelDescription>
                    {videoDetails.description}
                  </ChannelDescription>
                </div>
              </DetailsContainer>
            </ResponsiveContainer>
          </VideoContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoItem
