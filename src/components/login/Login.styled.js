import { styled } from "styled-components";
import {Link} from "react-router-dom";
export const SignupContainer = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const QuestionTag = styled.p`
  color: #5c6260;
`;

export const LinkTag = styled(Link)`
  color: #13a178;
  text-decoration:underline;
  text-underline-offset: 2.5px;
`;
