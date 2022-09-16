import React from "react";
import styled from "styled-components";
import ProfileRecipeListItem from "./ProfileRecipeListItem";

interface Recipe {
  coverImgUrl: string;
  name: string;
  ingredientsCount: number;
  cookTime: string;
}

type RecipesList = Recipe[];

interface RecipesListProps {
  recipes: RecipesList;
}

const ProfileRecipesList = ({ recipes }: RecipesListProps) => {
  console.log("|||||||||", recipes.length > 2 && recipes.length / 2);
  return (
    <Wrapper>
      {recipes.map((rec, idx) => (
        <ProfileRecipeListItem key={idx} recipe={rec} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export type { Recipe, RecipesList };
export default ProfileRecipesList;
