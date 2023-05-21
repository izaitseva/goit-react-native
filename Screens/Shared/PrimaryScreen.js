import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native'
import HeaderAvatar from "../../Components/HeaderAvatar";

export default function PrimaryScreen({ children, title, avatar, isKeyboardVisible, keyboardOffset }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerWrapper}>
                <ImageBackground
                    style={styles.bgImage}
                    source={require('../../assets/images/photoBg.jpg')}>
                    <View style={{ ...styles.container }}>
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
        resizeMode: 'cover'
    },
    container: {        
        width: "100%",
        height: "70%",
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 0,
        paddingLeft: 16,
        paddingRight: 16,
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