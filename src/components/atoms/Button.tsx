import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { height, width } from '../../utils/utility_functions/UtilityFunctions'

import { Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../themes/colors'

const { white, veryDarkGray, black } = colors

interface Props {
    onPress?: () => void;
    label?: string;
    style?: {};
    textStyle?: any;
    disabled?: boolean
}

const Button: React.FC<Props> = ({ label, style = {}, textStyle, disabled = false, onPress = () => { }, ...props }) => {

    return (
        <TouchableOpacity style={[styles.root, style]} activeOpacity={0.7}>
            <Text style={[styles.label, {fontFamily: 'OpenSans'}]}>{label}</Text>
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: veryDarkGray,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.85,
        paddingVertical: 10,
        borderBottomStartRadius: 10,
    },
    label: {
        alignSelf: 'center',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '400',
        color: white,
        // fontFamily: 'OpenSans'
    },
})

export default Button