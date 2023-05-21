import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native'

export default function CreatePostsTab({ onPress }) {
    return (
        <TouchableOpacity style={styles.tab} onPress={onPress}>
            <Feather name="plus" size={24} color="#fff" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        alignSelf: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});