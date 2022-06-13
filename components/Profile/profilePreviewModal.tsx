import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React from "react";
import styled from "styled-components";
import { object, string } from "yup";
import {
  collection,
  addDoc,
  DocumentReference,
  Timestamp,
} from "firebase/firestore";

import { auth, db } from "../../config/firebaseConfig";

interface ProfilePreviewProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

interface ProfilePreviewFormValues {
  name: string;
  bio: string;
  email: string;
  phoneNumber: string;
}

const ProfilePreviewModal = ({
  isModalOpen,
  handleCloseModal,
}: ProfilePreviewProps) => {
  // current user
  const currentUser = auth.currentUser;
  console.log("***** currentUser", currentUser);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: "0px 6px 20px rgba(13, 51, 32, 0.1)",
    borderRadius: "8px",
  };

  const initialProfilePreviewVals: ProfilePreviewFormValues = {
    name: currentUser?.displayName || "",
    bio: "",
    email: currentUser?.email || "",
    phoneNumber: currentUser?.phoneNumber || "",
  };

  const profileFormSchema = object({
    name: string().required(),
    bio: string().required(),
    email: string().email(),
    phoneNumber: string().required(),
  });

  const handleSubmit = async (values: any, actions: any) => {
    console.log("***** form vals and actions *****", values, actions);

    try {
      // create a profile record in firestore
      const profileRef: DocumentReference<any> = await addDoc(
        collection(db, "profiles"),
        {
          ...values,
          createdAt: Timestamp.fromDate(new Date()),
          createdBy: values.email,
        }
      );

      console.log(
        "**** success: successfully added profile to firestore ****",
        profileRef.id
      );

      // close the modal
      handleCloseModal();

      // @TODO: redirect to the home page
    } catch (error) {
      console.log("*** err: error creating a profile ****", error);
    }
  };
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="profile-preview-modal"
      aria-describedby="profile-preview-modal-to-update-basic-user-info"
    >
      <ModalContent sx={modalStyle}>
        <Avatar
          alt={currentUser?.displayName || ""}
          src={currentUser?.photoURL || ""}
          sx={{ width: 100, height: 100 }}
        />
        <p className="edit_profile_cta">Edit Profile Picture</p>
        <Formik
          initialValues={initialProfilePreviewVals}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
          validationSchema={profileFormSchema}
        >
          {({ isSubmitting }) => (
            <Form
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Full Name"
              />
              <Field
                component={TextField}
                name="bio"
                type="text"
                label="Bio"
                multiline
              />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
              <Field
                component={TextField}
                name="phoneNumber"
                type="phone"
                label="Phone Number"
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#30BE76",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                }}
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 60vh;
  padding: 2rem 0;
  gap: 1rem;
  font-family: "Nunito";

  .edit_profile_cta {
    color: #30be76;
  }
`;

export default ProfilePreviewModal;
