import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({style, title, onPress}) {

    return (
        <View style={style}>
            <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </TouchableOpacity>
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