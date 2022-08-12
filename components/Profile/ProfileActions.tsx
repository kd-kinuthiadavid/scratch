import React from "react";
import styled from "styled-components";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const ProfileActions = () => {
  return (
    <Wrapper>
      <div className="action_item">
        <ModeEditOutlinedIcon />
        <div className="action_name">Edit Profile</div>
      </div>
      <div className="action_item">
        <SettingsOutlinedIcon />
        <div className="action_name">Settings</div>
      </div>
      <div className="action_item">
        <LogoutOutlinedIcon />
        <div className="action_name">Log out</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  margin-top: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .action_item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: normal;
    cursor: pointer;
  }
`;

export default ProfileActions;
