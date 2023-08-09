import React, { useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import SelectedInput from "../SelectedInput/SelectedInput";
import { Wrapper } from "./FilterCategory.styled";

function FilterCategory({ title, inputTitle, isChecked }) {
  const [changeChecked, setChangeChecked] = useState(false);

  const handleCheckboxChange = event => {
    setChangeChecked(event.target.checked);
  };

  return (
    <Wrapper>
      <FilterTitle title={title} />
      {inputTitle.map(item => (
        <SelectedInput
          key={item}
          title={item}
          isChecked={item.isChecked}
          onChange={handleCheckboxChange}
        />
      ))}
    </Wrapper>
  );
}

export default FilterCategory;
