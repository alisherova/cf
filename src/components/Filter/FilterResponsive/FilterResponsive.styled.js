import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
  margin-top: 5px;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const Image = styled.img`
  width: 22px;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-left: 10px;
  color: #5c6260;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.div`
  margin-top: 5px;
`;
