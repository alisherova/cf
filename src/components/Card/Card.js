import React from "react";
import {
  CardWrapper,
  CardImg,
  Title,
  CardFooter,
  CardContent,
  SupportBtn
} from "./Card.styled";
import ProgressBar from "../ProgressBar";

const Card = ({ data }) => {
  function shortenTitle(title) {
    const MAX_LENGTH = 60;
    if (title.length <= MAX_LENGTH) {
      return title;
    } else {
      return title.slice(0, MAX_LENGTH) + "...";
    }
  }

  return (
    <CardWrapper to={`/campaigns/${data._id}`}>
      <CardImg src={data.main_img_url} alt={data.title} />
      <CardContent>
        <Title>{shortenTitle(data.title)}</Title>
      </CardContent>
      <CardFooter>
        <ProgressBar
          width={{
            target_amount: data.target_amount,
            amount_raised: data.amount_raised
          }}
          height="3"
        />
        <SupportBtn>Qo&apos;llab-quvvatlash</SupportBtn>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
