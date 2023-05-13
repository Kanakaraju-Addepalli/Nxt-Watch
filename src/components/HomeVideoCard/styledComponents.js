import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 1;
  @media screen and (min-width: 576px) {
    width: 260px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  @media screen and (min-width: 992px) {
    width: 380px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 10px;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 10px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
  color: #424242;
`
export const ChannelNameAndViewsContainer = styled.div`
  display: flex;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 5px;
  color: #424242;
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  margin-top: 0px;
  color: #424242;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;
  @media screen and (min-width: 567px) {
    margin-left: 0px;
  }
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 50%;
  margin-top: 10px;
  padding-left: 4px;
  padding-right: 4px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
