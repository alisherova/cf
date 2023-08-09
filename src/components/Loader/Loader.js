import React from "react";
import {
  Container,
  Svg,
  LoaderWrapper,
  LoadOne,
  LoadTwo,
  LoadThree,
  PointOne,
  PointTwo,
  PointThree
} from "./Loader.styled";

const LoaderComponent = () => {
  return (
    <Container>
      <LoaderWrapper>
        <Svg
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <LoadOne cx="60" cy="60" r="40" />
          <LoadTwo cx="60" cy="60" r="40" />
          <LoadThree cx="60" cy="60" r="40" />
          <g>
            <PointOne cx="45" cy="70" r="5" />
            <PointTwo cx="60" cy="70" r="5" />
            <PointThree cx="75" cy="70" r="5" />
          </g>
        </Svg>
      </LoaderWrapper>
    </Container>
  );
};

export default LoaderComponent;
