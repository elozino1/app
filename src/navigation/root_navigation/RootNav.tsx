import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import Onboarding from '../../screens/onboarding/Onboarding'
import AuthStack from '../authentication/AuthStack'

interface Props {
  
  // Onboarding: any;
}
const RootNav: React.FC<Props> = () => {

    useEffect(()=>{
        setTimeout(()=>{
          SplashScreen.hide();
        }, 3000)
      },[])

  return (
   <Onboarding/>
  )
}

export default RootNav

const styles = StyleSheet.create({

})