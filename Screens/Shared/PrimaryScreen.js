import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native'
import HeaderAvatar from "../../Components/HeaderAvatar";
import { useKeyboardVisible } from '../../hooks/useKeyboardVisible';

export default function PrimaryScreen({ children, title, avatar, keyboardOffset }) {

    const isKeyboardVisible = useKeyboardVisible();
    const containerMarginBottom = {
        paddingBottom: isKeyboardVisible
            ? keyboardOffset ?? 0
            : 0
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerWrapper}>
                <ImageBackground
                    style={styles.bgImage}
                    source={require('../../assets/images/photoBg.jpg')}>
                    <View style={{ ...styles.container, ...containerMarginBottom }}>
                        {
                            avatar &&
                            <View style={styles.avatarBlock}>
                                <HeaderAvatar />
                            </View>
                        }
                        <View style={[styles.titleBlock, avatar ? styles.titleBlockWithAvatar : styles.titleBlockWithoutAvatar]}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <View>
                            {children}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "flex-end"
    },
    container: {
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
        // paddingBottom: 78,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    avatarBlock: {
        position: 'absolute',
        alignSelf: 'center',
        top: -60
    },
    titleBlock: {
        alignSelf: 'center',
        paddingBottom: 33,
        marginTop: 92
    },
    titleBlockWithAvatar: {
        marginTop: 92
    },
    titleBlockWithoutAvatar: {
        marginTop: 32
    },
    title: {
        fontSize: 30,
        fontWeight: 500,
    }
})