import Button from "@mui/material/Button";
import React from "react";
import styled from "styled-components";

const AllFeed = () => {
  return (
    <Wrapper>
      <div className="feed_header">
        <p>286 of your followers are online</p>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#30BE76",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          Create Recipe
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .feed_header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
  }
`;

export default AllFeed;
