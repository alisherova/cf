import styled from "styled-components";

export const Title = styled.h3`
  display: inline-block;
  color: #5c6260;
  position: relative;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  margin-bottom: 10px;
  margin-left: 42px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 60%;
    height: 1px;
    background-color: #a7abaa;

    @media screen and (max-width: 1300px) {
      width: 75%;
    }
  }

  @media screen and (max-width: 920px) {
    margin-left: 20px;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    line-height: 40px;
  }
`;
