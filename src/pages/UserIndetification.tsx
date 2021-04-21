import React from 'react';

import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View 
} from 'react-native';

import CustomButton from '../components/CustomButton';
import colors from '../styles/colors';
import dimensions from '../utils/dimensions';


const UserIdentification = () => {
    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.wrapper}>
                    <Text style={styles.emoji}>😀</Text>

                    <Text style={styles.title}>
                        Como podemos{'\n'}
                        chamar você?
                    </Text>

                    <TextInput style={styles.textInput} placeholder='Digite um nome' />

                    <CustomButton text='Confirmar' width={0.65}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
        marginTop: dimensions.HEIGHT * 0.1,
    },
    emoji: {
        fontSize: 44,
        color: 'white',
        marginBottom: 24,
        minHeight: 24
    },
    title: {
        color: colors.heading,

        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Jost-SemiBold',
        lineHeight: 32,

        marginBottom: 36,
    },

    textInput: {
        width: dimensions.WIDTH * 0.7,

        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.gray,

        textAlign: 'center',

        color: colors.body_text,
        fontFamily: 'Jost-Regular',
        fontSize: 17,
        lineHeight: 23,

        marginBottom: 40
    },

    footer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        backgroundColor: colors.blue
    }
})

export default UserIdentification;