import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import {
  LoginFormContainer,
  Form,
  WebsiteLogoImage,
  InputContainer,
  InputLabel,
  UsernameInputField,
  PasswordInputField,
  ErrorMessage,
  LoginButton,
  CheckBoxContainer,
  CheckBoxLabel,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    isPasswordVisible: false,
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  showPassword = () => {
    const {isPasswordVisible} = this.state
    this.setState({isPasswordVisible: !isPasswordVisible})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, isPasswordVisible} = this.state
    const {isDark} = this.props
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type={isPasswordVisible ? 'text' : 'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          isDark={isDark}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    const {isDark} = this.props
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UsernameInputField
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          isDark={isDark}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    console.log(errorMsg)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginFormContainer isDark={isDark}>
              <Form onSubmit={this.submitForm} isDark={isDark}>
                <WebsiteLogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  className="login-website-logo-desktop-image"
                  alt="website logo"
                />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>

                <CheckBoxContainer>
                  <input
                    id="show"
                    type="checkbox"
                    onChange={this.showPassword}
                  />
                  <CheckBoxLabel htmlFor="show">Show Password</CheckBoxLabel>
                </CheckBoxContainer>

                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </Form>
            </LoginFormContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default LoginForm
