import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';
import ReviewForm from './Form';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const review = {
        ownerName: values.ownerName,
        repositoryName: values.repositoryName,
        rating: Number(values.rating),
        text: values.text,
      };

      const createdReview = await createReview(review);

      navigate(`/repository/${createdReview.repositoryId}`);
    } catch (e) {
      setError(e.message);
    }
  };

  return <ReviewForm onSubmit={onSubmit} error={error} />;
};

export default CreateReview;