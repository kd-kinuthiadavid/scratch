import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";

import { imagesLoaer } from "../../utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from "../../config/firebaseConfig";

interface OnboardingModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  ariaModalTitle: string;
  ariaModalDescription: string;
  role: string;
  toggleProfilePreviewModal: (isOpen: boolean) => void;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: "0px 6px 20px rgba(13, 51, 32, 0.1)",
  borderRadius: "8px",
};
const modalBgImgUrl: string = imagesLoaer("onboarding_modal_bg_0IdldSOW_.png");
const logoURL = imagesLoaer("Logos/Desktop/Logoscratch_logo_SzQC08Uhz.svg");

const OnboardingModal = ({
  isModalOpen,
  handleCloseModal,
  ariaModalTitle,
  ariaModalDescription,
  role,
  toggleProfilePreviewModal,
}: OnboardingModalProps) => {
  // hooks
  const isNotBigScreen = useMediaQuery("(max-width:800px)");

  const completeSignIn = () => {
    // @TODO: check if this is a new user or a returning user

    // close the modal
    handleCloseModal();

    // open the profile preview modal
    toggleProfilePreviewModal(true);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      // The signed-in user info.
      const user = result.user;

      console.log(`***** success: Google Sign In Result *****`);

      completeSignIn();
    } catch (error) {
      // Handle Errors here.
      console.log("**** err: err signing in with google ****", error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const authResult = await signInWithPopup(auth, facebookAuthProvider);
      console.log("***** success: successfully signed in with facebook *****");
      const user = authResult.user;

      completeSignIn();
    } catch (error) {
      // Handle Errors here.
      console.error("**** err: err signing in with facebook ****", error);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      const authResult = await signInWithPopup(auth, twitterAuthProvider);
      console.log("***** success: successfully signed in with twitter *****");

      const user = authResult.user;

      completeSignIn();
    } catch (error) {
      // Handle Errors here.
      console.error("**** err: err signing in with twitter ****", error);
    }
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby={ariaModalTitle}
      aria-describedby={ariaModalDescription}
    >
      <ModalContent sx={modalStyle}>
        <div className="bg_image">
          <img src={logoURL} alt="Onboarding Modal Background" />
        </div>
        <div className="form_content">
          <div className="form_title">
            <h3>
              {role === "Signup" ? "Start from Scratch" : "Welcome Back!"}
            </h3>
            <small>{`Please ${
              role === "Signup" ? "sign up" : "log in"
            } to continue.`}</small>
          </div>
          <div className="form_buttons">
            {/* Sign In with google */}
            <Button
              sx={{
                color: "#ea4335",
                borderColor: "#ea4335",
                textTransform: "capitalize",
              }}
              variant="outlined"
              startIcon={!isNotBigScreen && <GoogleIcon />}
              size="large"
              onClick={handleGoogleSignIn}
            >
              {`${role === "Signup" ? "Sign Up" : "Login"} with Google`}
            </Button>
            {/* sign in with facebook */}
            <Button
              sx={{
                color: "#3b5998",
                borderColor: "#3b5998",
                textTransform: "capitalize",
              }}
              variant="outlined"
              startIcon={!isNotBigScreen && <FacebookIcon />}
              size="large"
              onClick={handleFacebookSignIn}
            >
              {`${role === "Signup" ? "Sign Up" : "Login"} with Facebook`}
            </Button>
            {/* sign in with twitter */}
            <Button
              sx={{
                color: "#00acee",
                borderColor: "#00acee",
                textTransform: "capitalize",
              }}
              variant="outlined"
              startIcon={!isNotBigScreen && <TwitterIcon />}
              size="large"
              onClick={handleTwitterSignIn}
            >
              {`${role === "Signup" ? "Sign Up" : "Login"} with Twitter`}
            </Button>
          </div>
          <div className="form_footer">
            <small>
              {role === "Signup"
                ? "Already have an account?"
                : "New to Scratch?"}
            </small>
            <p>
              {role === "Signup" ? "Login Here" : "Create Your Account Here"}
            </p>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 60vw;
  height: 60vh;
  padding: 0;
  gap: 1rem;
  font-family: "Nunito";

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 95vh;
  }

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    /* width: 95vw;
    height: 95vh; */
  }

  .bg_image {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.437555) 0%,
        #ffffff 94.91%
      ),
      url(${modalBgImgUrl});
    background-size: cover;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .form_content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 45%;
    margin: 4rem 0;

    @media (max-width: 1000px) {
      align-items: center;
    }
  }

  .form_title h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  small {
    color: #a8a8a8;
    font-weight: 400;
  }

  .form_buttons {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form_footer p {
    color: #30be76;
    margin: 0.3rem 0;
  }
`;

export default OnboardingModal;
