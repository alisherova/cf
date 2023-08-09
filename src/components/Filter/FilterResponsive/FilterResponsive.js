import React, { useState } from "react";
import {
  Wrapper,
  Text,
  TextWrapper,
  Image,
  CloseButton
} from "./FilterResponsive.styled";
import Filter from "../../../assets/images/Filter.svg";
import FilterCloseButton from "../../../assets/images/FilterCloseButton.svg";

function FilterResponsive() {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <Wrapper onClick={toggleVisibility}>
      <TextWrapper>
        <Image src={Filter} alt="filter" />
        <Text>Saralash</Text>
      </TextWrapper>
      {isVisible && (
        <CloseButton onClick={toggleVisibility}>
          <Image src={FilterCloseButton} alt="FilterCloseButton" />
        </CloseButton>
      )}
    </Wrapper>
  );
}

export default FilterResponsive;
