import React from "react";
import styled from "styled-components";
import { Recipe } from "./ProfileRecipesList";

interface ItemProps {
  recipe: Recipe;
}

const ProfileRecipeListItem = ({ recipe }: ItemProps) => {
  return (
    <Wrapper>
      <img src={recipe.coverImgUrl} alt={recipe.name} />
      <p> {recipe.name} </p>
      <div className="footer">
        <div className="footer_desc">
          <small>{recipe.cookTime}</small>
          <small> {recipe.ingredientsCount + `ingredients`} </small>
        </div>
        <button>Cook</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    object-fit: cover;
    width: 100%;
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 32px;
    color: #030f09;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer_desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
      color: #606060;
    }

    button {
      background: #ffffff;
      border: 1px solid #30be76;
      border-radius: 4px;
      color: #30be76;
      padding: 0.3rem 0.9rem;
      cursor: pointer;
    }
  }
`;

export default ProfileRecipeListItem;
