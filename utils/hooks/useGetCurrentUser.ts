// import React from "react";
import { auth } from "../../config/firebaseConfig";

const useGetCurrentUser = () => {
  let currentUser;

  const authedUser = auth.currentUser;
  if (authedUser) {
    // fetch the profile associated with the authed user
  }

  console.log("***** current user ********", authedUser);
  return {
    currentUser,
  };
};

export default useGetCurrentUser;
