import React from "react";
import { Formik } from "formik";
import ReviewsSchema from "./ReviewsSchema";
import ReviewForm from "./ReviewsForm";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

export default function ReviewsFormik(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.closeReviewModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Formik
          initialValues={{
            reviewText: "",
            rating: 0
          }}
          validationSchema={ReviewsSchema}
          onSubmit={values => {
            props.createReview({ company: props.company._id, ...values });
          }}
          render={formProps => <ReviewForm {...formProps} {...props} />}
        />
      </DialogContent>
    </Dialog>
  );
}
