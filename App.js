import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import tw from 'twrnc'

import AuthScreens from './src/screens/AuthScreens/AuthScreens'
import QuickCheckOpenings from './src/screens/QuickCheckOpenings/QuickCheckOpening';
import AuthenticationScreens from './src/screens/AuthenticationScreens/AuthenticationScreens';
import RegisterScreens from './src/screens/RegisterScreens/RegisterScreens'
import SoalQuickCheck from './src/screens/SoalQuickCheck/SoalQuickCheck';
import ScoreBarAbove from './src/components/ScoreBarAbove/ScoreBarAbove';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
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
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View
      style={[tw`flex-1 justify-center items-center`, { backgroundColor: '#FFD4B8' }]}
      onLayout={onLayoutRootView}>
      {/* <AuthScreens /> */}
      {/* <QuickCheckOpenings/> */}
      {/* <AuthenticationScreens/> */}
      {/* <RegisterScreens/> */}
      {/* <SoalQuickCheck/> */}
      <ScoreBarAbove diamonds='100'/>

    </View>
  );
}