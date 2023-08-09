import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  background: #fafafa;
  color: #88888c;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid #39a686;
  border-radius: 5px;
  padding: 6px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1100px) {
    width: 100%;,
  }

  @media screen and (max-width: 800px) {
    width: 50%; 
    font-size: 14px; 
  }

  @media screen and (max-width: 350px) {
    width: 100%;   
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: #88888c;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: Poppins, sans-serif;

  &::placeholder {
    @media screen and (max-width: 920px) {
      font-size: 13px;
    }
  }
`;
