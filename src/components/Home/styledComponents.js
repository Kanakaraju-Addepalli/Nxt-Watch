import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 250px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 250px;
  display: flex;
  justify-content: space-between;
  padding: 40px;
`
export const BannerContent = styled.div`
  width: 60%;
`

export const BannerImage = styled.img`
  width: 120px;
  height: 30px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 20px;
  border: 1px solid #1e293b;
  color: #000000;
  background: none;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
  @media screen and (min-width: 576px) {
    font-size: 17px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 20px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #7e858e;
  border-radius: 3px;
  margin: 20px;
  width: 90%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 100px;
  border: none;
  cursor: pointer;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: 1px solid #7e858e;
  color: ${props => (props.isDark ? '#ffffff' : '#333')};
  font-family: 'Roboto';
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
