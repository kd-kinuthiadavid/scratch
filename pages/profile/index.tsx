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

const logoURL = imagesLoaer("Logos/Desktop/Logoscratch_logo_SzQC08Uhz.svg");
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
          <ProfRecipeCategories profileCats={profCats} />
        </ProfileRecipes>
      </ProfileWrapper>
    </Layout>
  );
};

const ProfileWrapper = styled.div`
  height: 100vh;
  background-color: #f7f8fa;
  display: grid;
  grid-template-columns: 1fr [col-start] 4fr [col-start];
  column-gap: 8rem;
  padding: 0 10rem;

  @media (max-width: 1200px) {
    column-gap: 4rem;
    padding: 0 3rem;
  }
`;

const ProfileDetails = styled.div`
  margin-top: 2.5rem;
`;

const ProfileRecipes = styled.div`
  margin-top: 2.5rem;
  overflow-x: scroll;
  white-space: nowrap;
`;

export default Profile;
