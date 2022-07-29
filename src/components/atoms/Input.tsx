import { Text, View } from 'react-native'

import React from "react"

interface Props {
    multiline: boolean,
    borderWidth?: number,
    type: 'select' | 'input',
    text?: string,
    backgroundColor?: string,
}

const Input: React.FC<Props> = ({ text }) => {

    return (
        <View>
            <Text style={{fontFamily: 'HelveticaNeue', fontWeight:'700'}}>{text}</Text>
        </View>
    )
}

export default Input