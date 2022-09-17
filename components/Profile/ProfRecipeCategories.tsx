import React from "react";
import styled from "styled-components";
import ProfRecipeCategoryItem from "./ProfRecipeCategoryItem";

interface ProfileRecipeCategory {
  catName: string;
  imgUrl: string;
  count: number; // how many recipes of this category has the user created?
}

interface ProfRecipeCategoriesProps {
  profileCats: ProfileRecipeCategory[];
}

const ProfRecipeCategories = ({ profileCats }: ProfRecipeCategoriesProps) => {
  return (
    <CategoriesWrapper>
      {profileCats.length &&
        profileCats.map((cat, idx) => (
          <ProfRecipeCategoryItem key={idx} profCat={cat} />
        ))}
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`;

export type { ProfileRecipeCategory };
export default ProfRecipeCategories;
