import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, Keyboard  } from "react-native";
import Input from "../Components/Input";
import PrimaryButton from "../Components/PrimaryButton";
import PasswordInput from "../Components/PasswordInput";
import PressableText from "../Components/PressableText";
import PrimaryScreen from "./Shared/PrimaryScreen";
import { useState } from "react";

export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = () => {
        Keyboard.dismiss();

        console.log({
            email,
            password
        });
    }

    return (
        <PrimaryScreen title="Увійти" keyboardOffset={35}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <Input placeholder="Адреса електронної пошти" onChangeText={setEmail} value={email} keyboardType={"email-address"} />
                <PasswordInput placeholder="Пароль" onChangeText={setPassword} value={password} />
                <PrimaryButton title="Увійти" style={styles.signInBtn} onPress={onSignIn} />
                <View style={styles.notExistAccountPart}>
                    <Text>Немає аккаунту? </Text>
                    <PressableText title="Зареєструватися" />
                </View>
            </KeyboardAvoidingView>
        </PrimaryScreen>
    )
}

const styles = StyleSheet.create({
    signInBtn: {
        marginTop: 27
    },
    notExistAccountPart: {
        marginTop: 16,
        marginBottom: 120,
        justifyContent: "center",
        flexDirection: 'row'
    }
});