import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ProfileSummary from "../../components/Profile/ProfileSummary";
import AllFeed from "./components/AllFeed";
import FeedHighlights from "./components/FeedHighlights";

const Feed = () => {
  return (
    <Layout>
      <Wrapper>
        <ProfileSummary />
        <AllFeed />
        <FeedHighlights />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr [col-start] 4fr [col-start] 2fr [col-start];
  column-gap: 4rem;
  padding: 2rem 10rem 0;
`;

export default Feed;
