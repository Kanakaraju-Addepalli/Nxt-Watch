import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#333333' : '#f9f9f9')};
  height: 100vh;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 64px 48px 64px 48px;
  @media screen and (min-width: 992px) {
    width: 450px;
    max-width: 500px;
    flex-shrink: 0;
    box-shadow: 0px 8px 20px rgba(7, 7, 7, 0.08);
  }
`
export const WebsiteLogoImage = styled.img`
  width: 165px;
  align-self: center;

  @media screen and (min-width: 992px) {
    width: 185px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const UsernameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6px;
`
export const CheckBoxLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #475569;
  padding-left: 3px;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
