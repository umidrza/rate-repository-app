import { FlatList } from "react-native";
import useCurrentUser from "../../hooks/useCurrentUser";
import ReviewItem from "../ReviewItem";

const MyReviews = () => {
  const { currentUser, loading, refetch } = useCurrentUser(true);

  if (loading) {
    return null;
  }

  const reviews = currentUser?.reviews?.edges.map(edge => edge.node) ?? [];

  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} ownReview />}
    />
  );
};

export default MyReviews;