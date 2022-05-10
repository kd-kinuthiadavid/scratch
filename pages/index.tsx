import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const Onboarding: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scratch | Onboarding</title>
      </Head>
      <Main>
        <NavBar />
      </Main>
    </div>
  );
};

const Main = styled.main`
  display: flex;
`;

export default Onboarding;
