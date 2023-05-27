import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScren from 'expo-splash-screen';


SplashScren.preventAutoHideAsync();


export default function HomeLayout() {
    const [fontsLoaded] = useFonts({
        DMBold : require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium : require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),

    })

    const onLayoutRootView = useCallback(async () =>{
        if(fontsLoaded) {
            await SplashScren.hideAsync();

        }
    }, [fontsLoaded])


    if(!fontsLoaded) return null;

    return (
        <Stack onLayout={onLayoutRootView}/>
    )
}