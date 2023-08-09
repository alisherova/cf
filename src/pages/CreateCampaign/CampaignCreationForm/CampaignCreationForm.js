import { useState } from "react";
import Select from "react-select";
import "react-dropdown/style.css"; 
import { MdOutlineNavigateNext } from "react-icons/md"; 
import { categories, cities } from "./options"; 

import {
  Form,
  Input,
  ImgInput,
  ChosenImg,
  UploadIcon,
  SearchIcon,
  CategorySelectStyles,
  AddressSelectStyles ,
  Summary,
  Label,
  Button,
  RouterLink
} from "./CampaignCreationForm.styled";

export default function CampaignCreationForm() {
  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState();
  const [endDate, setEndDate] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  function isFormValid() {
    return (
      imgName &&
      title &&
      summary &&
      targetAmount &&
      category &&
      address &&
      endDate
    );
  }

  function CustomNotFoundMessage(value) {
    return `Bunday ${value} topilmadi`;
  }

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setImg(imgUrl); // Store the URL in the img state
      setImgName(file.name);
    } else {
      setImg(null);
      setImgName("");
    }
  };

  return (
    <Form>
      <Label className="imgLabel" htmlFor="image">
        <UploadIcon className="uploadIcon" />
        <span>Asosiy rasmni yuklash</span>
      </Label>
      <ImgInput
        id="image"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        required
      />
      {img && <ChosenImg src={img} alt="Selected" />}
      <Label>Lavha nomi*:</Label>
      <Input
        type="text"
        minLength="4"
        maxLength="30"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <Label htmlFor="summary">
        Mablag' yig'ishning ta'sirini bir jumla bilan umumlashtiring*:
      </Label>
      <Summary
        id="summary"
        name="summary"
        rows="5"
        cols="35"
        minLength="30"
        maxLength="150"
        value={summary}
        onChange={e => setSummary(e.target.value)}
        required></Summary>
      <Label htmlFor="targetAmount">Maqsad qo'ygan pul miqdori (so'm)*:</Label>
      <Input
        type="number"
        id="targetAmount"
        value={targetAmount}
        onChange={e => setTargetAmount(e.target.value)}
        required
      />
      <Label htmlFor="category">Toifa*:</Label>
      <Select
        options={categories}
        value={category}
        id="category"
        placeholder="Toifani tanlang:"
        onChange={option => setCategory(option)}
        isClearable={true}
        isSearchable={false}
        styles={CategorySelectStyles}
        noOptionsMessage={() => CustomNotFoundMessage("toifa")}
      />
      <Label>Manzil*:</Label>
      <Select
        options={cities}
        value={address}
        id="address"
        placeholder="Manzilni tanlang:"
        onChange={option => setAddress(option)}
        isClearable={false}
        styles={isSearching ? AddressSelectStyles : CategorySelectStyles}
        isSearchable="true"
        onMenuOpen={() => setIsSearching(true)}
        onMenuClose={() => setIsSearching(false)}
        components={isSearching && { DropdownIndicator: SearchIcon }}
        noOptionsMessage={() => CustomNotFoundMessage("shahar")}
      />
      <Label>Tugash sanasi*:</Label>
      <Input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        placeholder=""
        required
      />
      <Button disabled={!isFormValid()}>
        <RouterLink to={"/create-campaign/2"}>
          Keyingisi <MdOutlineNavigateNext style={{ fontSize: "22px" }} />
        </RouterLink>
      </Button>
    </Form>
  );
}
