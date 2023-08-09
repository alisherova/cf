import styled from "styled-components";
import arrow from "../../../assets/images/FilterAreaPolygon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (max-width: 920px) {
    margin-top: 20px;
  }
`;

export const Label = styled.p`
  max-width: 200px;
  color: #5c6260;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;

  @media screen and (max-width: 920px) {
    font-size: 14px;
  }
`;

export const Select = styled.select`
  width: 60%;
  height: 31px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #a7abaa;
  background: #fff;
  margin-top: 20px;
  padding: 0px 10px;
  text-transform: capitalize;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${arrow});
  background-size: 8%;
  background-position: 95% center;
  background-repeat: no-repeat;
  font-size: 14px;

  &:focus {
    outline: none !important;
    border: 1px solid #a7abaa;
  }

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
`;

export const Option = styled.option`
  margin-left: 10px;
  margin: 5px 10px;
  font-size: 14px;
`;
