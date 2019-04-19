import React from "react";
import { Formik } from "formik";
import ReviewsSchema from "./ReviewsSchema";
import ReviewForm from "./ReviewsForm";

export default function ReviewsFormik(props) {
	return (
		<div>
			<Formik
				initialValues={{
					reviewText: "",
					rating: 0
				}}
				validationSchema={ReviewsSchema}
				onSubmit={(review = { company: props.company, ...values }) =>
					props.createReview(review)
				}
				render={formProps => <ReviewForm {...formProps} {...props} />}
			/>
		</div>
	);
}
