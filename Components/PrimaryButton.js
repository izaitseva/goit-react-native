import { View, StyleSheet, Pressable, Text } from "react-native";

export default function PrimaryButton({style, title, onPress}) {

    return (
        <View style={style}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </Pressable>
        </View>        
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 51,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00"
    },
    title: {
        color: "#fff",
        alignSelf: 'center'
    }
});