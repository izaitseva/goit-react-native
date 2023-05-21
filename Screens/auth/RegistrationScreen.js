import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import PasswordInput from "../components/PasswordInput";
import PressableText from "../components/PressableText";
import PrimaryScreen from "./shared/PrimaryScreen";
import { useState } from "react";

export default function RegistrationScreen() {

    const signUpHandler = () => {
        Keyboard.dismiss();

        console.log({
            email,
            password,
            login
        });
    }

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <PrimaryScreen
            title="Реєстрація"
            avatar={{}}
            keyboardOffset={75}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <Input placeholder="Логін" onChangeText={setLogin} value={login} />
                <Input placeholder="Адреса електронної пошти" onChangeText={setEmail} value={email} keyboardType={"email-address"} />
                <PasswordInput placeholder="Пароль" onChangeText={setPassword} value={password} />
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
        marginBottom: 65,
        justifyContent: "center",
        flexDirection: 'row'
    }
});