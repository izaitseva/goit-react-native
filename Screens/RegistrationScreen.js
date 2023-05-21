import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import Input from "../Components/Input";
import PrimaryButton from "../Components/PrimaryButton";
import PasswordInput from "../Components/PasswordInput";
import PressableText from "../Components/PressableText";
import PrimaryScreen from "./Shared/PrimaryScreen";
import { useState } from "react";

export default function RegistrationScreen() {

    const signUpHandler = () => {
        Keyboard.dismiss();
    }

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <PrimaryScreen
            title="Реєстрація"
            avatar={{}}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <Input placeholder="Логін" onChangeText={setLogin} />

                <Input placeholder="Адреса електронної пошти" onChangeText={setEmail} />

                <PasswordInput placeholder="Пароль" onChangeText={setPassword}/>
                <PrimaryButton title="Зареєструватися" style={styles.registerButton} onPress={signUpHandler} />
                <View style={styles.existsAccountPart}>
                    <Text>Вже є аккаунт? </Text>
                    <PressableText title="Увійти" />
                </View>
            </KeyboardAvoidingView>
        </PrimaryScreen>
    )
}

const styles = StyleSheet.create({
    registerButton: {
        marginTop: 27
    },
    existsAccountPart: {
        marginTop: 16,
        justifyContent: "center",
        flexDirection: 'row'
    }
});