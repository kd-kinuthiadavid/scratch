import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

import Button from "../components/Button";
import { imagesLoaer } from "../utils";
import OnboardingModal from "../components/OnboardingModal";
import ProfilePreviewModal from "../components/Profile/profilePreviewModal";

const bgImgUrl = imagesLoaer("onboarding_bg_img_kKPNX61Ce.png");
const tbBgImgUrl = imagesLoaer("onboarding_tablet_bg_oxMjU5Zyb.png");

const Onboarding: NextPage = () => {
  // state
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  const [ariaModalTitle, setAriaModalTitle] = useState("");
  const [ariaModalDescription, setAriaModalDescription] = useState("");
  const [onBoardingModalRole, setOnBoardingModalRole] = useState("");
  const [showProfilePreviewModal, setShowProfilePreviewModal] =
    React.useState(false);

  const closeOnboardingModal = () => setIsOnboardingModalOpen(false);

  const handleSignup = () => {
    // open the modal
    setIsOnboardingModalOpen(true);

    // set the modal role, title and description
    setAriaModalTitle("Signup Modal");
    setAriaModalDescription("This is the signup modal");
    setOnBoardingModalRole("Signup");
  };
  const handleLogin = () => {
    // open the modal
    setIsOnboardingModalOpen(true);

    // set the modal role, title and description
    setAriaModalTitle("Login Modal");
    setAriaModalDescription("This is the login modal");
    setOnBoardingModalRole("Login");
  };

  const closeProfilePreviewModal = () => setShowProfilePreviewModal(false);

  const toggleProfilePreviewModal = (isOpen: boolean) =>
    setShowProfilePreviewModal(isOpen);

  return (
    <OnboardingWrapper>
      <Head>
        <title>Scratch | Onboarding</title>
      </Head>
      <Main>
        <NavBar />
        {showProfilePreviewModal && (
          <ProfilePreviewModal
            isModalOpen={showProfilePreviewModal}
            handleCloseModal={closeProfilePreviewModal}
          />
        )}
        {isOnboardingModalOpen && (
          <OnboardingModal
            isModalOpen={isOnboardingModalOpen}
            handleCloseModal={closeOnboardingModal}
            ariaModalTitle={ariaModalTitle}
            ariaModalDescription={ariaModalDescription}
            role={onBoardingModalRole}
            toggleProfilePreviewModal={toggleProfilePreviewModal}
          />
        )}
        <div className="main_content">
          <h1>
            Join over 50 million people
            <br /> sharing recipes everyday
          </h1>
          <p>
            Never run out of ideas again. Try new foods, ingredients, cooking
            style, and more
          </p>
        </div>
        <div className="action_buttons">
          <Button
            variant="primary"
            text="Join Scratch"
            handleClick={handleSignup}
          />
          <Button variant="outlined" text="Log In" handleClick={handleLogin} />
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

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    background-image: url(${tbBgImgUrl}),
      linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 52.12%, #ffffff 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
`;

const Main = styled.main`
  font-family: "Nunito";
  font-style: normal;
  padding: 3rem 0 0 8rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding-top: 10rem !important;
  }

  @media (max-width: 1000px) {
    padding: 0;
    padding-top: 3rem;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1400px) {
    padding-top: 6rem;
  }

  h1 {
    margin: 0;
    margin-top: 4.5rem;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: -0.5px;
    max-width: 50vw;
    color: #030f09;

    @media (max-width: 1000px) {
      font-size: 2rem;
      line-height: 35px;
      letter-spacing: 0.5px;
      max-width: 80vw;
    }

    @media (min-width: 1400px) {
      font-size: 2.7rem;
      margin-top: 6rem;
    }
  }

  p {
    margin: 0;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    max-width: 50vw;
    color: #606060;

    @media (max-width: 1000px) {
      color: #4f4d4d;
      max-width: 80vw;
    }

    @media (min-width: 1400px) {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }

  .action_buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;

    @media (max-width: 600px) {
      max-width: 80vw;
    }

    @media (max-width: 1000px) {
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 1400px) {
      gap: 2rem;
      margin-top: 3.5rem;
    }
  }
`;

export default Onboarding;
