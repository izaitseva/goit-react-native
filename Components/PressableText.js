import { Pressable, StyleSheet, Text } from "react-native";

export default function PressableText({title, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#1B4371"
    }
});