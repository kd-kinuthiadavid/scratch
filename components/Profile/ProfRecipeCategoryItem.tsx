import React from "react";
import styled from "styled-components";
import { ProfileRecipeCategory } from "./ProfRecipeCategories";

interface ProfRecipeCategoryItemProps {
  profCat: ProfileRecipeCategory;
}

const ProfRecipeCategoryItem = ({ profCat }: ProfRecipeCategoryItemProps) => {
  return (
    <CatItemWrapper>
      <CatImg src={profCat.imgUrl} alt={profCat.catName} />
      <p>{`${profCat.catName} (${profCat.count})`}</p>
    </CatItemWrapper>
  );
};

const CatItemWrapper = styled.div`
  /* flex-basis: 100%; */

  p {
    margin: 0;
    font-weight: bold;
    margin-top: 0.3rem;
  }
`;

const CatImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.6rem;
  opacity: 0.3;
  transition: all 0.04s ease-in;

  @media screen and (prefers-reduced-motion) {
    transition: none;
  }

  &:hover {
    opacity: 1;
    border: 2px solid #30be76;
    cursor: pointer;
  }
`;

export default ProfRecipeCategoryItem;
