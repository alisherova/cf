import { schema } from "./Register.validator";
import { useForm } from "react-hook-form";
import FacebookIcon from "../../assets/icons/FacebookIcon.svg";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { isDirty, isValid } from "zod";
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
} from "./Registration.styled";

const RegistrationForm = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema)
  });

  const [validityStatus, setValidityStatus] = useState({});

  const test = inputName => {
    if (getFieldState(inputName).isDirty) {
      setValidityStatus(prevValidityStatus => ({
        ...prevValidityStatus,
        [`is${inputName.charAt(0).toUpperCase()+inputName.slice(1)}Valid`]: true
      }));
    }
  };

  const handleUserData = UserData => {
    validityStatus.isFirstNameValid = false;
    validityStatus.isLastNameValid = false;
    validityStatus.isEmailValid = false;
    validityStatus.isPasswordValid = false;
    validityStatus.isConfirmPasswordValid = false;
    reset();
  };

  return (
    <Wrapper>
      <FormContainer>
        <RegisterForm onSubmit={handleSubmit(handleUserData)}>
          <InputContainer>
            <Input
              id="firstName"
              type="text"
              autoComplete="new-off"
              {...register("firstName", {
                onBlur: () => test("firstName")
              })}
              valid={validityStatus["isFirstNameValid"]?.toString()}
            />
            <Label
              htmlFor="firstName"
              valid={validityStatus["isFirstNameValid"]?.toString()}>
              Ism
            </Label>
            {errors.firstName && (
              <ErrorMessage> {errors.firstName.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              id="lastName"
              type="text"
              autoComplete="new-off"
              {...register("lastName", {
                onBlur: () => {
                  if (isDirty || isValid) {
                    test("lastName");
                  }
                }
              })}
              valid={validityStatus["isLastNameValid"]?.toString()}
            />
            <Label
              htmlFor="lastName"
              valid={validityStatus["isLastNameValid"]?.toString()}>
              Familiya
            </Label>
            {errors.lastName && (
              <ErrorMessage> {errors.lastName.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              id="email"
              type="email"
              autoComplete="new-off"
              {...register("email", {
                onBlur: () => test("email")
              })}
              valid={validityStatus["isEmailValid"]?.toString()}
            />
            <Label
              htmlFor="email"
              valid={validityStatus["isEmailValid"]?.toString()}>
              Email
            </Label>
            {errors.email && <ErrorMessage> {errors.email.message}</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Input
              id="password"
              type="password"
              {...register("password", {
                onBlur: () => test("password")
              })}
              autoComplete="off"
              valid={validityStatus["isPasswordValid"]?.toString()}
            />
            <Label
              htmlFor="password"
              valid={validityStatus["isPasswordvalid"]?.toString()}>
              Parol
            </Label>
            {errors.password && (
              <ErrorMessage> {errors.password.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                onBlur: () => test("confirmPassword")
              })}
              autoComplete="off"
              valid={validityStatus["isConfirmPasswordValid"]?.toString()}
            />
            <Label
              htmlFor="confirmPassword"
              valid={validityStatus["isConfirmPasswordValid"]?.toString()}>
              Parolni tasdiqlash
            </Label>
            {errors.confirmPassword && (
              <ErrorMessage> {errors.confirmPassword.message}</ErrorMessage>
            )}
          </InputContainer>
          <SubmitButton type="submit" disabled={!isSubmitting}>
            Ro&apos;yhatdan o&apos;tish
          </SubmitButton>
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

export default RegistrationForm;