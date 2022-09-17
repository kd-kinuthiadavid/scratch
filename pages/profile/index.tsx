import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ProfileActions from "../../components/Profile/ProfileActions";
import ProfileSummary from "../../components/Profile/ProfileSummary";
import ProfRecipeCategories, {
  ProfileRecipeCategory,
} from "../../components/Profile/ProfRecipeCategories";
import ProfRecipesHeader from "../../components/Profile/ProfRecipesHeader";
import { imagesLoaer } from "../../utils";
import ProfileRecipesList, {
  RecipesList,
} from "../../components/Profile/ProfileRecipesList";

const profCats: ProfileRecipeCategory[] = [
  {
    catName: "Western",
    imgUrl: imagesLoaer("Recipe_categories/western_2X_kTYdDF3z3.png"),
    count: 8,
  },
  {
    catName: "Italian",
    imgUrl: imagesLoaer("Recipe_categories/italian_1x_dlGmsmygR.png"),
    count: 2,
  },

  {
    catName: "Soups",
    imgUrl: imagesLoaer("Recipe_categories/soups_2x_H-JWqTks3y.png"),
    count: 4,
  },
  {
    catName: "Soups",
    imgUrl: imagesLoaer("Recipe_categories/soups_2x_H-JWqTks3y.png"),
    count: 4,
  },

  {
    catName: "Soups",
    imgUrl: imagesLoaer("Recipe_categories/soups_2x_H-JWqTks3y.png"),
    count: 4,
  },
  {
    catName: "Pasta",
    imgUrl: imagesLoaer("Recipe_categories/pasta_1x_TfL8C1fel.png"),
    count: 1,
  },
];

const recipes: RecipesList = [
  {
    name: "Cooked Coconut Mussels",
    coverImgUrl: imagesLoaer("Recipes/RecImgs/grilled_pepper_1x_UX9hWjnsQ.png"),
    ingredientsCount: 4,
    cookTime: "5 mins",
  },
  {
    name: "Grilled Black Pepper Prawns",
    coverImgUrl: imagesLoaer("Recipes/RecImgs/grilled_pepper_1x_UX9hWjnsQ.png"),
    ingredientsCount: 4,
    cookTime: "45 mins",
  },
  {
    name: "Smoked Carrots & Ginger Mammoth",
    coverImgUrl: imagesLoaer("Recipes/RecImgs/smoked_carrots_1x_buQCyMxdo.png"),
    ingredientsCount: 5,
    cookTime: "30 mins",
  },
  {
    name: "Shallow-Fried Peppermint Frog",
    coverImgUrl: imagesLoaer(
      "Recipes/RecImgs/shallow_fried_pepper_1x_QqMVtsC2u.png"
    ),
    ingredientsCount: 4,
    cookTime: "25 mins",
  },
  {
    name: "Fish Floating In Forest",
    coverImgUrl: imagesLoaer(
      "Recipes/RecImgs/onions_spaghetti_1x_-bETPz6uI.png"
    ),
    ingredientsCount: 3,
    cookTime: "35 mins",
  },
  {
    name: "Indian Rice With A Twist",
    coverImgUrl: imagesLoaer("Recipes/RecImgs/grilled_pepper_1x_UX9hWjnsQ.png"),
    ingredientsCount: 6,
    cookTime: "55 mins",
  },
];

const Profile = () => {
  return (
    <Layout>
      <ProfileWrapper>
        <ProfileDetails>
          <ProfileSummary />
          <ProfileActions />
        </ProfileDetails>
        <ProfileRecipes>
          <ProfRecipesHeader />
          <ProfileCatsWrapper>
            <ProfRecipeCategories profileCats={profCats} />
          </ProfileCatsWrapper>
          <ProfileRecipesList recipes={recipes} />
        </ProfileRecipes>
      </ProfileWrapper>
    </Layout>
  );
};

const ProfileWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr [col-start] 4fr [col-start];
  column-gap: 8rem;
  padding: 0 10rem;
  padding-bottom: 5rem;

  @media (max-width: 1200px) {
    column-gap: 4rem;
    padding: 0 3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    padding: 0 1rem;
  }
`;

const ProfileDetails = styled.div`
  margin-top: 2.5rem;
`;

const ProfileRecipes = styled.div`
  overflow-x: hidden;
  margin-top: 2.5rem;
  margin-bottom: 7rem;
`;

const ProfileCatsWrapper = styled.div`
  overflow-x: scroll;
`;

export default Profile;
