import React from "react";
import { BsSearch } from "react-icons/bs";
import { Wrapper, SearchInput } from "./SearchBar.styled";

const SearchBar = () => {
  const debounce = (cb, delay = 400) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleInputChange = event => {
    console.log(event.target.value);
  };

  return (
    <Wrapper>
      <BsSearch />
      <SearchInput
        type="text"
        onInput={debounce(handleInputChange)}
        placeholder="Qidirish"
      />
    </Wrapper>
  );
};

export default SearchBar;
