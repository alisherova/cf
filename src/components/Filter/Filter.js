import React, { useState } from "react";

import {
  FilterResponsiveWrapper,
  Wrapper,
  SmallCategory,
  LargeCategory
} from "./Filter.styled";
import FilterByArea from "./FilterByArea";
import FilterCategory from "./FilterCategory";
import FilterResponsive from "./FilterResponsive";

function Filter() {
  const [isCategoryVisible, setCategoryVisibility] = useState(false);

  const category = [
    {
      id: 1,
      title: "Xayriya turlari",
      inputTitle: ["Ta'lim", "Salomatlik", "Yolg'iz onalar"],
      isChecked: false
    },
    {
      id: 2,
      title: "Saralash",
      inputTitle: [
        "Deyarli moliyalashtirilgan",
        "Eng yangisi",
        "Tez orada tugaydigyon"
      ],
      isChecked: false
    }
  ];

  const changeFilter = () => {
    setCategoryVisibility(!isCategoryVisible);
  };

  return (
    <Wrapper>
      <FilterResponsiveWrapper onClick={changeFilter}>
        <FilterResponsive />
      </FilterResponsiveWrapper>
      <LargeCategory>
        {category.map(item => (
          <FilterCategory
            key={item.id}
            title={item.title}
            inputTitle={item.inputTitle}
            isChecked={item.isChecked}
          />
        ))}
        <FilterByArea />
      </LargeCategory>
      {isCategoryVisible && (
        <SmallCategory>
          {category.map(item => (
            <FilterCategory
              key={item.id}
              title={item.title}
              inputTitle={item.inputTitle}
              isChecked={item.isChecked}
            />
          ))}
          <FilterByArea />
        </SmallCategory>
      )}
    </Wrapper>
  );
}

export default Filter;
