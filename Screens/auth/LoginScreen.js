import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, Keyboard  } from "react-native";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import PasswordInput from "../../components/PasswordInput";
import PressableText from "../../components/PressableText";
import PrimaryScreen from "../shared/PrimaryScreen";
import { useState } from "react";

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = () => {
        Keyboard.dismiss();

        console.log({
            email,
            password
        });
    }

    const goToRegisterScreen = () => {
        navigation.navigate("Registration");
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
                    <PressableText title="Зареєструватися" onPress={goToRegisterScreen}/>
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