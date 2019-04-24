import { Formik } from "formik";
import React from "react";
import ChangePasswordSchema from "./ChangePasswordSchema";
import ChangePasswordForm from "./ChangePasswordForm";

export default function EditUser(props) {
  const { error, user, saveChanges, role } = props;
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  };

  return (
    <Formik
      initialValues={{
        ...initialValues,
        error
      }}
      validationSchema={ChangePasswordSchema}
      onSubmit={values => {
        saveChanges(values, role);
      }}
      render={formProps => <ChangePasswordForm {...formProps} {...props} />}
    />
  );
}
