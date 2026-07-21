import * as yup from 'yup';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Repository owner's username is required"),

  repositoryName: yup
    .string()
    .required("Repository name is required"),

  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100"),

  text: yup.string(),
});

export default validationSchema;