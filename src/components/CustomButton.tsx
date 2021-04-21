import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import dimensions from '../utils/dimensions';

interface CustomButtonInterface {
    text: string,
    width: number
}

const CustomButton: React.FC<CustomButtonInterface> = ({text, width}) => {
    return(
        <TouchableOpacity style={[styles.button, {width: dimensions.WIDTH * width}]}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 16
    },
    text: {
        fontFamily: 'Host-Medium',
        fontSize: 17,
        lineHeight: 23,
        textAlign: 'center',
        color: colors.white
    }
})

export default CustomButton;