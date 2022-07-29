import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'
import React from 'react'
import { colors } from '../../themes/colors'

interface Props {
    
}

const Login: React.FC<Props> = () => {

    return (
        <SafeAreaView style={styles.grandContainer}>
            <Input 
                multiline={false} 
                type='select' 
                text='Welcome to SeerBit'/>
            <Button label='Some' disabled={false}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    grandContainer: {
        backgroundColor: colors.white
    }
})

export default Login