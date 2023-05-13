import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    margin-left: 15px;
  }
`
export const GamingListItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 0px;
  }
`
export const GamingThumbNailImage = styled.img`
  margin: 0px;
  width: 150px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 300px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
