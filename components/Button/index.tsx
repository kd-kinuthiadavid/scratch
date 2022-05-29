import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant: string;
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ScButton = ({ variant, text, handleClick }: ButtonProps) => {
  return (
    <>
      {variant === "primary" ? (
        <PrimaryBtn onClick={handleClick}>{text}</PrimaryBtn>
      ) : variant === "outlined" ? (
        <SecBtn onClick={handleClick}>{text}</SecBtn>
      ) : (
        <SecBtn onClick={handleClick}>{text}</SecBtn>
      )}
    </>
  );
};

const ScBtn = styled.button`
  width: 14.94rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  border: none;
  filter: drop-shadow(0px 6px 20px rgba(13, 51, 32, 0.1));

  /* styles for the text inside the buttons */
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  @media (max-width: 600px) {
    width: 11.94rem;
    height: 3rem;

    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }

  @media (min-width: 1400px) {
    width: 16.94rem;
    height: 4.125rem;
  }
`;

const PrimaryBtn = styled(ScBtn)`
  background-color: #30be76;
  color: #ffffff;
`;

const SecBtn = styled(ScBtn)`
  background-color: #ffffff;
  color: #30be76;
  border: 2px solid #30be76;
`;

export default ScButton;
