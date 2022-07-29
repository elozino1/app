import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { StyleSheet, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import Login from './src/screens/login/Login';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/themes/colors';

// prevent hiding splash screen until resources are completely fetched
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'OpenSans': require('./src/assets/fonts/OpenSans.ttf'),
          'HelveticaNeue': require('./src/assets/fonts/HelveticaNeue.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
