import { keyframes, styled } from "styled-components";
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

export const FullPage = styled.div`
  width: ${props => (props.show === "true" ? "100%" : " 0%")};
  height: 100%;
  background: #8080805e;
  position: fixed;
  overflow: hidden;
  z-index: 9;
`;

export const NavShadow = styled.div`
  width: 100%;
  box-shadow: 0px 1px 20px -3px rgba(0, 0, 0, 0.1);
`;

export const NavbarWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 0;

  @media screen and (max-width: 800px) {
    width: 94%;
    display: ${props => (props.show === "true" ? "flex" : " none")};
    height: auto;
    background-color: white;
    position: absolute;
    top: 1.5%;
    left: 3%;
    flex-direction: column;
    justify-content: center;
    border-radius: 13px;
    padding: 80px 0 30px;
    transition: all 0.3s ease-in-out;
    z-index: 99;
    animation: ${fadeInAnimation} 0.3s ease-in-out;
  }
`;

export const SmallScreenWrapper = styled.div`
  width: 90%;
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 0;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 800px) {
    padding: 15px 10px;
    width: 96%;
    display: flex;
  }
`;

export const BurgerButton = styled.div`
  cursor: pointer;
  display: none;
  transition: all 0.2s ease-in;

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 20px;
    z-index: 999;
  }
`;

export const SmallScreenLogo = styled(Link)`
  display: none;

  @media screen and (max-width: 800px) {
    width: 12%;
    display: flex;
  }

  @media screen and (max-width: 480px) {
    width: 20%;
  }
`;

export const Logo = styled(Link)`
  width: 7%;

  @media screen and (max-width: 1200px) {
    width: 10%;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavbarUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavbarUlList = styled(Link)`
  list-style: none;
  background: #fff;
  color: #5c6260;
  font-weight: 500;
  font-size: 18px;
  padding: 3px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #39a686;
    color: #fff !important;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  ${props =>
    props.isActive === "true" &&
    ` 
      border: 1px solid #39a686;
      background-color: #39a686;
      color: #fff;
  `}

  ${props =>
    props.isActive === "true" &&
    `
    &:hover {
      border: 1px solid #39a686;
      background-color: white !important;
      color: #39a686 !important;
    }
  `}

  @media screen and (max-width: 900px) {
    padding: 3px 13px;
    font-size: 16px;
  }

  @media screen and (max-width: 800px) {
    display: block;
    width: 80%;
    padding: 0.8rem 0;
    text-align: center;
  }
`;

export const NavbarBtn = styled.button`
  background-color: #ffbf43;
  color: white;
  border: 1px solid #ffbf43;
  border-radius: 5px;
  padding: 8px 22px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #ffbf43;
    transition: all 0.2s ease-in;
  }

  @media screen and (max-width: 1050px) {
    width: 20%;
    padding: 6px;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-top: 0.8rem;
    padding: 16px 0;
    font-size: 16px;
  }
`;
