import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { imagesLoaer } from "../utils";

const bgImgUrl = imagesLoaer("onboarding_bg_img_kKPNX61Ce.png");

const Onboarding: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scratch | Onboarding</title>
      </Head>
      <Layout>
        <Main>
          <div className="main_content">
            <h1>Join over 50 millions people sharing recipes everyday</h1>
            <p>
              Never run out of ideas again. Try new foods, ingredients, cooking
              style, and more
            </p>
          </div>
          <div className="action_buttons">
            <button>Signup</button>
            <button>Login</button>
          </div>
        </Main>
      </Layout>
    </div>
  );
};

const Main = styled.main`
  display: flex;
  height: 100vh;
  background-image: url(${bgImgUrl});
`;

export default Onboarding;
