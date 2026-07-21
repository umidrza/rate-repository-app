import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

const RepositoryOrderPicker = ({ value, onChange }) => (
    <Picker
        selectedValue={value}
        onValueChange={(itemValue) => onChange(itemValue)}
        style={styles.picker}
    >
        <Picker.Item
            label="Latest repositories"
            value="LATEST"
        />
        <Picker.Item
            label="Highest rated repositories"
            value="HIGHEST"
        />
        <Picker.Item
            label="Lowest rated repositories"
            value="LOWEST"
        />
    </Picker>
);

export default RepositoryOrderPicker;