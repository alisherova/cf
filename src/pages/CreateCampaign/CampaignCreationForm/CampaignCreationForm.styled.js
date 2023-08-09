import { styled } from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

export const sharedStyles = `
  width: 250px;
  padding: 3px;
  margin-bottom: 15px;
  background-color: #f5f5f5;
  border: none;
  outline: none;
`;

export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  width: 30%;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 50%;
  }

  @media screen and (max-width: 800px) {
    width: 60%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    border: 3px solid orange;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

export const Input = styled.input`
  ${sharedStyles};
  font-size: 16px;
  padding-left: 10px;
  margin-bottom: 18px;
  border-radius: 4px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="date"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }
  &[type="date"]:focus::-webkit-datetime-edit {
    color: black !important;
  }

  /* For Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const ImgInput = styled.input.attrs({
  type: "file"
})`
  display: none;
`;

export const ChosenImg = styled.img`
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  background-size: cover;
`;

export const UploadIcon = styled(AiOutlineCloudUpload)`
  margin: 0 10px 0 15px;
  font-size: 25px;
  color: #5c6260;
`;

export const SearchIcon = styled(BiSearchAlt2)`
  font-size: 1.2rem;
  margin-right: 5px;
`;

export const CategorySelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    boxShadow: state.isFocused ? "none" : baseStyles.boxShadow,
    backgroundColor: "#f5f5f5",
    width: "265px",
    "&:hover": {
      border: "none"
    },
    marginBottom: "20px",
    fontSize: "10px"
  }),
  menu: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f0f0" : base.backgroundColor,
    color: state.isFocused ? "#333" : base.color,
    width: "265px",
    maxHeight: "200px",
    overflow: "hidden",
    marginTop: "-10px",
    borderRadius: "5px",
    padding: "0 2px"
  }),
  option: base => ({
    ...base,
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#39a686" // Set the background color on hover
    },
    fontSize: "10px"
  })
};

export const AddressSelectStyles = {
  ...CategorySelectStyles,
  dropdownIndicator: base => ({
    ...base,
    display: "none"
  }),
  indicatorSeparator: () => ({
    display: "none"
  })
};

export const Summary = styled.textarea`
  ${sharedStyles};
  width: 380px;
  height: 90px;
  box-sizing: border-box;
  font-size: 1rem;
  padding-left: 10px;
  resize: none;
  border-radius: 4px;

  @media screen and (max-width: 500px) {
    width: 300px;
  }

  @media screen and (max-width: 360px) {
    width: 250px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #5C6260;
  font-family: "Poppins";
  font-size: 18px; 
  font-weight: 500;
  line-height: normal;


  &.imgLabel {
    ${sharedStyles};
    margin-bottom: 30px;
    display: flex;
    word-spacing: 2px;
    background-color: #fff;
    outline: 1px solid #39a686;
    border-radius: 5px;
    align-items: center;
    justify-content: flex-start;
    color: #39a686;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #39a686;
      outline: 1px solid #fff;
      color: #fff;
      transition: all 0.2s ease-in;

      & .uploadIcon
    }

    &:hover .uploadIcon {
      color: #fff;
      transition: all 0.2s ease-in;
    }
  }
`;

export const Button = styled.button`
  width: fit-content;
  align-self: flex-end;
  margin-right: 70px;
  padding: 8px 15px;
  border-radius: 7px;
  color: #fff;
  background-color: #39a686;
  cursor: pointer;
  border: none;
  font-size: 16px;

  ${props =>
    props.disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}

  &:hover {
    background-color: #fff;
    color: #39a686;
    outline: 2px solid #39a686;
    transition: all 0.3s ease-in;
  }
`;

export const RouterLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
