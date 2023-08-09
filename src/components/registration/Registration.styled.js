import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  font-family: "Poppins", sans-serif;
`;

export const FormContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 321px;
  gap: 30px;
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  background: ${props => (props.valid === "true" ? "white" : "#f5f5f5")};
  border: ${props => (props.valid === "true" ? "1px solid #ccc" : "none")};
  &:focus {
    outline: none;
    border: 2px solid #f5f5f5;
    background: white;
  }
  ${props =>
    props.valid === "true" &&
    `
      outline: none;
      border: 2px solid #f5f5f5;
      background: white !important;
    `}
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #f5f5f5 inset !important;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  bottom: 0;
  height: 15px;
  left: 16px;
  display: flex;
  align-items: center;
  pointer-events: none;
  font-weight: 500;
  font-size: 16px;
  color: #5c6260;
  transition: 0.3s;
  ${Input}:focus ~ & {
    font-size: 14px;
    background-color: white;
    padding-left: 4px;
    height: 15px;
    top: 0px;
    padding-right: 4px;
    color: black;
    transform: translate(0, -50%);
  }
  ${props =>
    props.valid &&
    `
      font-size: 14px;
      background-color: white;
      padding-left: 4px;
      height: 15px;
      top: 0px;
      padding-right: 4px;
      color: green;
      transform: translate(0, -50%);
    `}
`;

export const SubmitButton = styled.button`
  width: 214px;
  height: 43px;
  background: #39a686;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  &:disabled {
    opacity: 0.7;
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const ButtonGlobalStyle = `
width: 282px;
height: 46px;
display: flex;
gap:15px;
align-items: center;
font-family: "Poppins", sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 27px;
justify-content:center;
padding: 8px 27px 7px 18px;
border-radius: 20.99683952331543px;
`;

export const GoogleButton = styled.button`
  ${ButtonGlobalStyle}
  border: 1px solid #DDE0DF;
  background: white;
  color: #5c6260;
`;
export const FacebookButton = styled.button`
  ${ButtonGlobalStyle}
  border:none;
  color: white;
  background: #1877f2;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-left: 5px;
`;
