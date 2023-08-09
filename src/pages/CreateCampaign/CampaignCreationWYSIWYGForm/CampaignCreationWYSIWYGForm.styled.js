import { styled } from "styled-components";
import ReactQuill from "react-quill";

export const TextEditor = styled.div`
  width: 800px;
  height: 550px;
  margin: 60px auto;
  border: none;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ToolbarContainer = styled.div`
  width: 100%;

  & .ql-toolbar {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 8px;
  }
`;

export const StyledReactQuill = styled(ReactQuill)`
  width: 100%;
  height: 350px;
  border: none;

  & .ql-snow {
    border-radius: 5px;
  }
`;

export const SaveButton = styled.button`
  margin-top: 70px;
  align-self: flex-end;
  width: 134px;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  background-color: #39a686;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #39a686;
    transition: all 0.3s ease-in;
    outline: 2px solid #39a686;
  }

  ${props =>
    props.disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}
`;
