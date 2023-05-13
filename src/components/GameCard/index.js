import ThemeAndVideoContext from '../context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
  GameContainer,
} from './styledComponents'

const GameCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <GameContainer>
              <GamingListItem>
                <GamingThumbNailImage
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <GamingContentSection>
                  <GamingTitle color={textColor}>{title}</GamingTitle>
                  <GamingViewsAndDate color={textColor}>
                    {viewCount} Watching Worldwide
                  </GamingViewsAndDate>
                </GamingContentSection>
              </GamingListItem>
            </GameContainer>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GameCard
