import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";

const getProfileByEmail = async (email: string) => {
  // @TODO: check if this is a new user or a returning user
  const profileRef = collection(db, "profiles");
  const profEmailQuery = query(profileRef, where("email", "==", email));

  try {
    const querySnap = await getDocs(profEmailQuery);
    console.log("**** success ****", querySnap);
  } catch (error) {
    console.log("*** err: an error occurred fetching a profile  *****", error);
  }
};

export { getProfileByEmail };
