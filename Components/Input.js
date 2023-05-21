import { useState, useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) {
    // const [value, setValue] = useState("");
    // const inputHandler = (text) => setValue(text);

    const [focused, setFocused] = useState(false);

    const focusHandler = (isFocused) => {
        setFocused(isFocused);
    }

    return (
        <View>
            <TextInput
                value={value}
                style={[styles.input, focused ? styles.inputFocused : styles.inputNotFocused]}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onFocus={() => focusHandler(true)}
                onBlur={() => setFocused(false)}
                onChangeText={onChangeText}
                keyboardType={keyboardType}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 16,
        borderRadius: 8,
        width: "100%",
        borderWidth: 1,
        marginBottom: 16
    },
    inputFocused: {
        backgroundColor: "#fff",
        borderColor: "#FF6C00"
    },
    inputNotFocused: {
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
    }
});