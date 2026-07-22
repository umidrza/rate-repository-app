import { Alert, View, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";
import styles from "./styles";
import Text from '../Text';

const ReviewButtons = ({ review, refetch }) => {
    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview();

    const handleDelete = async () => {
        try {
            await deleteReview(review.id);
            await refetch();
        } catch (e) {
            console.log(e);
        }
    };

    const onDelete = () => {
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: handleDelete,
                },
            ]
        );
    };


    return (
        <View style={styles.buttonsContainer}>
            <Pressable onPress={() => navigate(`/repository/${review.repository.id}`)}
                style={[styles.viewButton, styles.buttons]}>
                <Text fontWeight="bold" color="white">
                    View repository
                </Text>
            </Pressable>

            <Pressable onPress={onDelete}
                style={[styles.deleteButton, styles.buttons]}>
                <Text fontWeight="bold" color="white">
                    Delete review
                </Text>
            </Pressable>
        </View>
    )
}

export default ReviewButtons;