import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'

import {
  NavbarBg,
  MenuIcon,
  LogoLink,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  LogoutIconButton,
  LogoutButton,
  ProfileImage,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value
      const color = isDark ? '#ffffff' : '#00306e'
      const bgColor = isDark ? '#181818' : '#ffffff'

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarBg isDark={isDark}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onClickChangeTheme}
            >
              {isDark ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <MenuIcon>
              <GiHamburgerMenu size={25} color={isDark ? '#ffffff' : null} />
            </MenuIcon>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer isDark={isDark}>
                  <ModalDesc isDark={isDark}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarBg>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
