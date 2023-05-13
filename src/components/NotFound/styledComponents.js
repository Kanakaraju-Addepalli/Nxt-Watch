import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 10px;
`

export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  text-align: center;
  margin: 0px;
  padding-top: 20px;
`

export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDark ? '#7e858e' : '#424242')};
  text-align: center;
`
