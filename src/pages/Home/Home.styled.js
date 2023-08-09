import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  transition: all 0.3s ease-in-out;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    width: 92%;
    flex-direction: column;
  }
`;

export const CardsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 65px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1300px) {
    width: 75%;
    gap: 30px 20px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 30px 10px;
    margin-top: 40px;
  }
`;

export const SidebarContainer = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1300px) {
    width: 25%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: row-reverse;
    align-items: start;
    justify-content: space-between;
    gap: 15px;
  }

  @media screen and (max-width: 350px) {
    flex-direction: column;
    gap: 20px;
  }
`;
