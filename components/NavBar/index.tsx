import { Avatar, InputAdornment, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { deepOrange } from "@mui/material/colors";

import { imagesLoaer } from "../../utils";
import useGetCurrentUser from "../../utils/hooks/useGetCurrentUser";

const NavBar = () => {
  const logoURL = imagesLoaer("Logos/Desktop/Logoscratch_logo_SzQC08Uhz.svg");
  const { fbAuthUser } = useGetCurrentUser();
  return (
    <Nav>
      <img src={logoURL} alt="Scratch Logo" />
      {fbAuthUser ? (
        <>
          <TextField
            id="standard-search"
            sx={{ width: 500 }}
            fullWidth
            placeholder="Search field"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <NavItems>
            <RamenDiningOutlinedIcon />
            <NotificationsIcon />
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ bgcolor: deepOrange[500] }}
            />
          </NavItems>
        </>
      ) : null}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NotificationsIcon = styled(NotificationsNoneIcon)`
`


export default NavBar;
