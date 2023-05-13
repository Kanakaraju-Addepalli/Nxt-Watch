import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: #cccccc;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 50px;
`
export const GamingTitleIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cbd5e1;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
