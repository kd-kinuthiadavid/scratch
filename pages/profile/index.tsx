import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ProfileActions from "../../components/Profile/ProfileActions";
import ProfileSummary from "../../components/Profile/ProfileSummary";
import ProfRecipesHeader from "../../components/Profile/ProfRecipesHeader";

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
        </ProfileRecipes>
      </ProfileWrapper>
    </Layout>
  );
};

const ProfileWrapper = styled.div`
  height: 100vh;
  background-color: #f7f8fa;
  display: grid;
  grid-template-columns: 1fr [col-start] 2fr [col-start];
  column-gap: 1.5rem;
  padding: 0 3rem;
`;

const ProfileDetails = styled.div`
  margin-top: 2.5rem;
`;

const ProfileRecipes = styled.div`
  margin-top: 2.5rem;
`;

export default Profile;
