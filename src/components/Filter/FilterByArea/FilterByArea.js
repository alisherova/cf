import React, { useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import { Label, Option, Select, Wrapper } from "./FilterByArea.styled";

function FilterByArea() {
  const [selectedValue, setSelectedValue] = useState("tashkent");

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const areas = ["tashkent", "namangan", "andijon"];

  return (
    <Wrapper>
      <FilterTitle title="Hudud" />
      <Label>Joylashuv hudud bo'yicha yordam berish</Label>
      <Select value={selectedValue} onChange={handleChange}>
        {areas.map(item => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default FilterByArea;
