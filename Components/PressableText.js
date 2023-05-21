import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PressableText({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#1B4371"
    }
});