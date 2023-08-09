import styled from "styled-components";

export const FundsToBeRaised = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;
  background-color: #dde0df;
`;

export const RaisedAmountProgressBar = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}px;
  background-color: #39a686;
  border-radius: 5px;
`;
