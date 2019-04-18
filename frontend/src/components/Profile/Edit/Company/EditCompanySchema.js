import { string, object, number, array } from "yup";

const EditCompanySchema = object().shape({
	name: string()
		.required()
		.min(4)
		.max(50),
	description: string()
		.required()
		.min(50)
		.max(500),
	email: string()
		.required()
		.email(),
	address: object().shape({
		country: string().required(),
		city: string().required(),
		other: string().required()
	}),
	rooms: object().shape({
		standart: object().shape({
			price: number()
				.required()
				.min(0),
			time: number()
				.required()
				.min(0)
		}),
		big: object().shape({
			price: number()
				.required()
				.min(0),
			time: number()
				.required()
				.min(0)
		}),
		toilet: object().shape({
			price: number()
				.required()
				.min(0),
			time: number()
				.required()
				.min(0)
		})
	}),
	services: array()
		.of(
			object().shape({
				name: string().required(),
				coefficient: number().required()
			})
		)
		.min(1)
		.required()
});

export default EditCompanySchema;
