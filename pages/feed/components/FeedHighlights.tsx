import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const FeedHighlights = () => {
  const router = useRouter();

  const handleRedirectToProfile = () => router.push("/profile");

  return (
    <Wrapper>
      <div className="highlights_card live">
        <p>Live cooking by Scratch</p>
      </div>
      <div className="highlights_card most_active">
        <p>Most Active Today</p>
        <div className="users">
          <Avatar
            onClick={handleRedirectToProfile}
            alt="Remy Sharp"
            sx={{
              backgroundColor: "orange",
              width: "10",
              height: "10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            RS
          </Avatar>
          <Avatar
            onClick={handleRedirectToProfile}
            alt="Remy Sharp"
            sx={{
              backgroundColor: "purple",
              width: "10",
              height: "10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            DK
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            onClick={handleRedirectToProfile}
            sx={{
              backgroundColor: "pink",
              width: "10",
              height: "10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            MK
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            onClick={handleRedirectToProfile}
            sx={{
              backgroundColor: "green",
              width: "10",
              height: "10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            MK
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            onClick={handleRedirectToProfile}
            sx={{
              backgroundColor: "pink",
              width: "10",
              height: "10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            MK
          </Avatar>
        </div>
      </div>
      <div className="highlights_card footer">
        <div className="links">
          <small>About</small>
          <small>Help</small>
          <small>Privacy Policy</small>
        </div>
        <div className="copywright">
          <small>&copy; Scratch {new Date().getFullYear()} </small>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .highlights_card {
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .most_active {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;

    p {
      margin: 0;
    }

    .users {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .links {
      display: flex;
      gap: 1rem;
    }

    small {
      color: #767676;
    }
  }
`;

export default FeedHighlights;
