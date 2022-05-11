import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

import Button from "../components/Button";
import { imagesLoaer } from "../utils";

const bgImgUrl = imagesLoaer("onboarding_bg_img_kKPNX61Ce.png");

const Onboarding: NextPage = () => {
  return (
    <OnboardingWrapper>
      <Head>
        <title>Scratch | Onboarding</title>
      </Head>
      <Main>
        <NavBar />
        <div className="main_content">
          <h1>
            Join over 50 millions people
            <br /> sharing recipes everyday
          </h1>
          <p>
            Never run out of ideas again. Try new foods, ingredients, cooking
            style, and more
          </p>
        </div>
        <div className="action_buttons">
          <Button variant="primary" text="Join Scratch" />
          <Button variant="outlined" text="Learn More" />
        </div>
      </Main>
    </OnboardingWrapper>
  );
};

const OnboardingWrapper = styled.div`
  height: 100vh;
  background-image: url(${bgImgUrl});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
`;

const Main = styled.main`
  font-family: "Nunito";
  font-style: normal;
  padding: 3rem 0 0 8rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    margin-top: 4.5rem;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: -0.5px;
    max-width: 50vw;
    color: #030f09;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    max-width: 50vw;
    color: #606060;
  }

  .action_buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
  }
`;

export default Onboarding;
