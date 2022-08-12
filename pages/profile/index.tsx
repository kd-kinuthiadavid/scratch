import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ProfileActions from "../../components/Profile/ProfileActions";
import ProfileSummary from "../../components/Profile/ProfileSummary";

const Profile = () => {
  return (
    <Layout>
      <ProfileWrapper>
        <ProfileDetails>
          <ProfileSummary />
          <ProfileActions />
        </ProfileDetails>
        <ProfileRecipes />
      </ProfileWrapper>
    </Layout>
  );
};

const ProfileWrapper = styled.div`
  height: 100vh;
  background-color: #f7f8fa;
  display: grid;
  grid-template-columns: 30% [col-start] 80% [col-start];
  column-gap: 1.5rem;
`;

const ProfileDetails = styled.div`
  margin-top: 2.5rem;
  margin-left: 3rem;
`;

const ProfileRecipes = styled.div`
  background-color: pink;
  margin-left: 3rem;
`;

export default Profile;
