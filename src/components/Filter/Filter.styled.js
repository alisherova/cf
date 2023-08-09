import styled, { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  column-gap: 40px;
  position: relative;

  @media (max-width: 767px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 800px) {
    width: 30%;
  }

  @media screen and (max-width: 600px) {
    width: 40%;
  }

  @media screen and (max-width: 500px) {
    width: 45%;
  }

  @media screen and (max-width: 440px) {
    width: 60%;
  }

  @media screen and (max-width: 350px) {
    width: 70%;
  }
`;

export const FilterResponsiveWrapper = styled.div`
  transition: all 0.4s;
`;

export const LargeCategory = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in-out;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SmallCategory = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    animation: ${fadeInAnimation} 0.5s ease-in-out;
    position: absolute;
    margin-top: 40px;
    padding: 10px 20px;
    background-color: white;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;
