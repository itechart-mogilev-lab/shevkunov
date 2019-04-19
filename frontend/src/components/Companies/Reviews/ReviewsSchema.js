import { string, object, number } from "yup";

const ReviewSchema = object().shape({
	reviewText: string()
		.required("Review text is required")
		.min(20),
	rating: number()
		.required("Pick rating")
		.min(1)
		.max(5)
});

export default ReviewSchema;
