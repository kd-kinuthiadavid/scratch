import Button from "@mui/material/Button";
import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const ProfRecipesHeader = () => {
  return (
    <Wrapper>
      <h1>My Recipes</h1>
      <Button
        size="small"
        variant="outlined"
        startIcon={<AddIcon />}
        style={{
          color: "#30BE76",
          borderColor: "#30BE76",
          textTransform: "capitalize",
          fontSize: "1rem",
          backgroundColor: "white",
        }}
      >
        Add New
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

export default ProfRecipesHeader;
