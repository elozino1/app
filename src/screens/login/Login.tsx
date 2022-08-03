import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'
import Label from '../../components/atoms/Label'
import React from 'react'
import { colors } from '../../themes/colors'

interface Props {
    
}

const Login: React.FC<Props> = () => {

    return (
        <SafeAreaView style={styles.grandContainer}>
            <Label text='Email:' />
            <Input 
                multiline={false} 
                type='select' 
                text='Welcome to SeerBit'/>
            <Button label='Some' disabled={false}/>
            <Label text='Password'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    grandContainer: {
        backgroundColor: colors.white
    }
})

export default Login