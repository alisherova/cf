import { keyframes, styled } from "styled-components";

export const bounce = keyframes`
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }`;

export const load = keyframes`
    0% {
        stroke-dashoffset: 570;
      }
      50% {
        stroke-dashoffset: 530;
      }
      100% {
        stroke-dashoffset: 570;
        transform: rotate(360deg);
      }`;

export const Container = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoaderWrapper = styled.div`
  width: 150px;
  height: 150px;
`;
export const Svg = styled.svg`
  width: 90%;
  fill: none;
`;
export const LoadOne = styled.circle`
  transform-origin: 50% 50%;
  stroke-dasharray: 570;
  stroke-width: 20px;
  stroke: #0b896b;
  animation: ${load} 1.5s infinite;
`;
export const LoadTwo = styled.circle`
  transform-origin: 50% 50%;
  stroke-dasharray: 570;
  stroke-width: 20px;
  stroke: #39a686;
  animation: ${load} 1.5s infinite;
  animation-delay: 0.1s;
`;

export const LoadThree = styled.circle`
  transform-origin: 50% 50%;
  stroke-dasharray: 570;
  stroke-width: 20px;
  stroke: #a3d3c1;
  animation: ${load} 1.5s infinite;
  animation-delay: 0.2s;
`;
export const PointOne = styled.circle`
  animation: ${bounce} 1s infinite ease-in-out;
  fill: #a3d3c1;
  animation-delay: 0s;
`;
export const PointTwo = styled.circle`
  animation: ${bounce} 1s infinite ease-in-out;
  fill: #39a686;
  animation-delay: 0.1s;
`;
export const PointThree = styled.circle`
  animation: ${bounce} 1s infinite ease-in-out;
  fill: #0b896b;
  animation-delay: 0.2s;
`;
