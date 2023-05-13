import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarBg = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const HeaderLogo = styled.img`
  width: 100px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 30px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  font-size: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 2px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 350px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
