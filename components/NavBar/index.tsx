import {
  AppBar,
  Avatar,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { deepOrange } from "@mui/material/colors";
import FilterListIcon from "@mui/icons-material/FilterList";

import { imagesLoaer } from "../../utils";
import useGetCurrentUser from "../../utils/hooks/useGetCurrentUser";

const NavBar = () => {
  const logoURL = imagesLoaer("Logos/Desktop/Logoscratch_logo_SzQC08Uhz.svg");
  const { fbAuthUser } = useGetCurrentUser();
  const isTablet = useMediaQuery("(max-width: 980px)");
  const isMobile = useMediaQuery("(max-width: 650px)");

  if (isMobile) {
    return (
      <>
        <MobileSearchWrapper>
          <TextField
            id="standard-search"
            sx={{ width: 300 }}
            fullWidth
            placeholder="Search recipe, people or tag"
            type="search"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <MobSearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <FilterIcon sx={{ fontSize: 30 }} />
        </MobileSearchWrapper>

        <AppBar
          position="fixed"
          color="inherit"
          sx={{ top: "auto", bottom: 0 }}
        >
          <AppBarToolbar>
            <SearchIcon className="nav_mobile_bottom" />
            <KitchenOutlinedIcon className="nav_mobile_bottom" />
            <RamenDiningOutlinedIcon className="nav_mobile_bottom" />
          </AppBarToolbar>
        </AppBar>
      </>
    );
  } else {
    return (
      <>
        <Nav>
          <img src={logoURL} alt="Scratch Logo" className="nav_icon" />
          {fbAuthUser ? (
            <>
              {!isMobile && !isTablet ? (
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
              ) : null}
              <NavItems>
                <RamenDiningOutlinedIcon className="nav_icon" />
                <NotificationsIcon className="nav_icon" />
                <Avatar
                  className="nav_icon"
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ bgcolor: deepOrange[500] }}
                />
              </NavItems>
            </>
          ) : null}
        </Nav>
        {isTablet && !isMobile && (
          <AppBar
            position="fixed"
            color="inherit"
            sx={{ top: "auto", bottom: 0 }}
          >
            <AppBarToolbar>
              <SearchIcon className="nav_mobile_bottom" />
              <KitchenOutlinedIcon className="nav_mobile_bottom" />
              <RamenDiningOutlinedIcon className="nav_mobile_bottom" />
            </AppBarToolbar>
          </AppBar>
        )}
      </>
    );
  }
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  border-radius: 1rem;
  background-color: white;
  position: sticky;
  top: 0;

  .nav_icon {
    &:hover {
      cursor: pointer;
    }
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NotificationsIcon = styled(NotificationsNoneIcon)``;
const FilterIcon = styled(FilterListIcon)`
  cursor: pointer;
`;
const MobSearchIcon = styled(SearchIcon)`
  color: black;
`;

const MobileSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 3rem;
  box-shadow: 15px 13px 25px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

const AppBarToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  gap: 7rem;

  .nav_mobile_bottom {
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      color: #30be76;
    }

    @media screen and (prefers-reduced-motion) {
      transition: ;
    }
  }
`;

export default NavBar;
