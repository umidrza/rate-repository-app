import { Formik } from 'formik';

import FormContainer from '../Form/FormContainer';
import FormikTextInput from '../Form/FormikTextInput';
import FormButton from '../Form/FormButton';
import validationSchema from './validation';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const ReviewForm = ({ onSubmit, error }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {(formikProps) => (
      <FormContainer error={error}>
        <FormikTextInput
          name="ownerName"
          placeholder="Repository owner name"
          formikProps={formikProps}
        />

        <FormikTextInput
          name="repositoryName"
          placeholder="Repository name"
          formikProps={formikProps}
        />

        <FormikTextInput
          name="rating"
          placeholder="Rating between 0 and 100"
          keyboardType="numeric"
          formikProps={formikProps}
        />

        <FormikTextInput
          name="text"
          placeholder="Review"
          multiline
          formikProps={formikProps}
        />

        <FormButton
          title="Create a review"
          onPress={formikProps.handleSubmit}
        />
      </FormContainer>
    )}
  </Formik>
);

export default ReviewForm;