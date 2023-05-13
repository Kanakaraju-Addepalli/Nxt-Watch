import styled from 'styled-components'

export const VideoContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  @media screen and (max-width: 568px) {
    width: 100%;
    max-width: 1000px;
    padding-top: 10px;
  }
`
export const ResponsiveContainer = styled.div`
  width: 1100px;
  @media screen and (max-width: 568px) {
    width: 100%;
    max-width: 1000px;
  }
`
export const VideoPlayer = styled.div`
  width: 1100px;
  height: 600px;
  @media screen and (max-width: 568px) {
    width: 100%;
    max-width: 1100px;
    height: 300px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 568px) {
    margin: 15px;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const VideoStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 568px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewsAndPublishedContainer = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  font-weight: 500;
  @media screen and (max-width: 568px) {
    font-size: 13px;
  }
`
export const Span = styled.span`
  font-size: 30px;
`
export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  color: ${props => props.color};
`
export const ButtonText = styled.span`
  margin: 0px;
  padding-right: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500px;

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const HrLine = styled.hr`
  border: 1px solid #cbd5e1;
`

export const ProfileContainer = styled.div`
  display: flex;
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const ProfileName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  margin: 0px;
`
export const Subscribers = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #64748b;
`
export const ChannelDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #424242;
`
