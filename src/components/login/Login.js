import { useForm } from "react-hook-form";
import FacebookIcon from "../../assets/icons/FacebookIcon.svg";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./Login.validator";

import { SignupContainer, QuestionTag, LinkTag } from "./Login.styled";

import {
  RegisterForm,
  FormContainer,
  Input,
  Label,
  InputContainer,
  SubmitButton,
  Wrapper,
  LoginOptions,
  GoogleButton,
  FacebookButton,
  ErrorMessage
} from "../registration/Registration.styled";

const LoginForm = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting }
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema)
  });

  const [validityStatus, setValidityStatus] = useState({});

  const test = inputName => {
    if (getFieldState(inputName).isDirty) {
      setValidityStatus(prevValidityStatus => ({
        ...prevValidityStatus,
        [`is${
          inputName.charAt(0).toUpperCase() + inputName.slice(1)
        }Valid`]: true
      }));
    }
  };

  const handleUserData = UserData => {
    validityStatus.isEmailValid = false;
    validityStatus.isPasswordValid = false;
    reset();
  };

  return (
    <Wrapper>
      <FormContainer>
        <RegisterForm onSubmit={handleSubmit(handleUserData)}>
          <InputContainer>
            <Input
              id="email"
              type="email"
              {...register("email", {
                onBlur: () => test("email")
              })}
              autoComplete="new-off"
              valid={validityStatus["isEmailValid"]?.toString()}
            />
            <Label
              htmlFor="email"
              valid={validityStatus["isEmailValid"]?.toString()}>
              Email
            </Label>
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              id="password"
              type="password"
              {...register("password", {
                onBlur: () => test("password")
              })}
              autoComplete="new-off"
              valid={validityStatus["isPasswordValid"]?.toString()}
            />
            <Label
              htmlFor="password"
              valid={validityStatus["isPasswordValid"]?.toString()}>
              Parol
            </Label>
            {errors.password && (
              <ErrorMessage> {errors.password.message}</ErrorMessage>
            )}
          </InputContainer>
          <SubmitButton type="submit" disabled={!isDirty || isSubmitting}>
            Kirish
          </SubmitButton>
          <SignupContainer>
            <QuestionTag>Profilingiz Yo&apos;qmi?</QuestionTag>
            <LinkTag to="/signup">Ro&apos;yxatdan o&apos;ting!</LinkTag>
          </SignupContainer>
        </RegisterForm>
      </FormContainer>
      <LoginOptions>
        <GoogleButton>
          <img src={GoogleIcon} alt="" />
          Google bilan kirish
        </GoogleButton>
        <FacebookButton>
          <img src={FacebookIcon} alt="" />
          Facebook bilan kirish
        </FacebookButton>
      </LoginOptions>
    </Wrapper>
  );
};

export default LoginForm;
