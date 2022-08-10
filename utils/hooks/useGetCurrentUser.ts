// import React from "react";
import { auth } from "../../config/firebaseConfig";

const useGetCurrentUser = () => {
  let currentUser;

  const fbAuthUser = auth.currentUser;
  if (fbAuthUser) {
    // fetch the profile associated with the authed user
  }

  console.log("***** current user ********", fbAuthUser);
  return {
    currentUser,
    fbAuthUser
  };
};

export default useGetCurrentUser;
