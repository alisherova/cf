import React from "react";
import { Input, Label, Wrapper } from "./SelectedInput.styled";

function SelectedInput({ checked, onChange, title }) {
  return (
    <Wrapper>
      <Input id={title} type="checkbox" checked={checked} onChange={onChange} />
      <Label htmlFor={title}>{title}</Label>
    </Wrapper>
  );
}

export default SelectedInput;
