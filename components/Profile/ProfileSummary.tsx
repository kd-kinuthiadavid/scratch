import { Avatar, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { deepOrange } from "@mui/material/colors";

const ProfileSummary = () => {
  const [isOwnProfile, _setIsOwnProfile] = useState(true);
  return (
    <Wrapper>
      <div className="bio_details">
        <Avatar
          className="nav_icon"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ bgcolor: deepOrange[500], width: 65, height: 65 }}
        />
        <div className="text_details">
          <p className="user_name">Nick Evans</p>
          <p className="user_bio">Potato Master</p>
          <div className="followers_likes">
            <p className="followers">584 followers</p>
            <p className="likes">23 likes</p>
          </div>
        </div>
      </div>
      <Divider variant="middle" style={{ margin: "1rem 0" }} />
      {isOwnProfile ? (
        <div className="foll_details">
          <div className="foll_detail_item">
            <p className="item_number">20</p>
            <p className="item_text">Recipes</p>
          </div>
          <div className="foll_detail_item">
            <p className="item_number">75</p>
            <p className="item_text">Saved</p>
          </div>
          <div className="foll_detail_item">
            <p className="item_number">278</p>
            <p className="item_text">Following</p>
          </div>
        </div>
      ) : (
        <Button
          variant="contained"
          fullWidth={true}
          style={{
            backgroundColor: "#30BE76",
            textTransform: "capitalize",
            color: "white",
            fontSize: "1rem",
          }}
        >
          Follow
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;

  p {
    margin: 0;
  }

  .bio_details {
    display: flex;
    justify-content: space-evenly;
    align-items: start;

    @media (min-width: 900px) {
      gap: 1.5rem;
    }

    .text_details {
      color: #606060;
      font-size: 0.9rem;

      .user_name {
        color: black;
        font-size: 1rem;
        font-weight: bold;
      }

      .followers_likes {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }
    }
  }

  .foll_details {
    display: flex;
    justify-content: space-between;

    .item_number {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .item_text {
      font-weight: normal;
      font-size: 1rem;
      color: #606060;
    }
  }
`;

export default ProfileSummary;
