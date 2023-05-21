import { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

export default function PasswordInput({placeholder, onChangeText}) {
    const [isVisible, setIsVisible] = useState(false);

    const [focused, setFocused] = useState(false);

    return (
        <View style={[styles.inputWrapper, focused ? styles.inputWrapperFocused : styles.inputWrapperNotFocused]}>
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
                secureTextEntry={!isVisible}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChangeText={onChangeText}/>
            <Pressable style={styles.showPassBtn} onPress={() => setIsVisible(!isVisible)}>
                <Text style={styles.showPassBtnTitle}>
                    {
                        isVisible ? 
                        <>Заховати</> :
                        <>Показати</>
                    }
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        width: "100%",
        height: 50,
        marginBottom: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1
    },
    inputWrapperFocused: {
        backgroundColor: "#fff",
        borderColor: "#FF6C00"
    },
    inputWrapperNotFocused: {
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",  
    },
    textInput: {
        flex: 1,
        height: "100%",
        padding: 16
    },
    showPassBtn: {
        height: 50,
        justifyContent: 'center'
    },
    showPassBtnTitle: {
        color: "#1B4371",
        paddingRight: 16
    }
});