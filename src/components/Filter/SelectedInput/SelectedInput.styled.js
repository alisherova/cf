import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (max-width: 920px) {
    padding-bottom: 15px;
  }
`;

export const Input = styled.input`
  min-width: 22px;
  min-height: 22px;
  border-radius: 6px;
  border: 1px solid #616161;
  accent-color: #39a686;

  @media screen and (max-width: 1300px) {
    min-width: 18px;
    min-height: 18px;
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: 800px) {
    min-width: 12px;
    min-height: 12px;
    width: 12px;
    height: 12px;
  }
`;

export const Label = styled.label`
  color: #5c6260;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-left: 20px;

  @media screen and (max-width: 920px) {
    margin-left: 10px;
    font-size: 12px;
  }
`;
