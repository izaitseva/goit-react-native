import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, Keyboard  } from "react-native";
import Input from "../Components/Input";
import PrimaryButton from "../Components/PrimaryButton";
import PasswordInput from "../Components/PasswordInput";
import PressableText from "../Components/PressableText";
import PrimaryScreen from "./Shared/PrimaryScreen";

export default function LoginScreen() {
    return (
        <PrimaryScreen title="Увійти" keyboardOffset={35}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>

                <Input placeholder="Адреса електронної пошти" />
                <PasswordInput placeholder="Пароль" />
                <PrimaryButton title="Увійти" style={styles.signInBtn} />
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