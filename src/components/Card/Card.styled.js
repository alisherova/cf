import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

export const CardWrapper = styled(Link)`
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: unset;
  text-decoration: none;
  animation: ${fadeInAnimation} 0.5s ease-in;
  border-radius: 16px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    scale: 1.04;
  }

  @media screen and (max-width: 560px) {
    width: 47%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media screen and (min-width: 800px) and (max-width: 1050px) {
    height: 150px;
  }
`;

export const Title = styled.p`
  color: #5c6260;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 0;

  @media screen and (max-width: 920px) {
    font-size: 12px;
  }
`;

export const CardContent = styled.div`
  height: 18%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  padding-right: 0;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  margin-top: 32px;

  @media screen and (min-width: 800px) and (max-width: 1050px) {
    margin-top: 20px;
  }
`;

export const SupportBtn = styled.button`
  background: #39a686;
  color: #ffffff;
  border: 1px solid #39a686;
  border-radius: 5px;
  padding: 3px 8px;
  margin-top: 18px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #39a686;
    transition: all 0.2s ease-in;
  }

  @media screen and (max-width: 920px) {
    padding: 5px;
    font-size: 10px;
  }
`;
