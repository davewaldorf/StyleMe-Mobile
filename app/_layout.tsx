import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Slot } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { StatusBar } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_Regular: require('../assets/fonts/Roboto-Regular.ttf'),
    Roboto_Bold: require('../assets/fonts/Roboto-Black.ttf'),
    Roboto_Medium: require('../assets/fonts/Roboto-Medium.ttf'),
    Roboto_Thin: require('../assets/fonts/Roboto-Thin.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}


function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { authenticated } = store.getState().user;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <StatusBar hidden />
        {authenticated ?
          <Stack initialRouteName='(tabs)'>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false, presentation: 'modal' }} />
            <Stack.Screen name="publish" options={{ headerShown: false, presentation: 'modal' }} />
          </Stack> :
          <Stack initialRouteName='(login)'>
            <Stack.Screen name="(login)" options={{ headerShown: false }} />
          </Stack>}
      </Provider>
    </ThemeProvider>
  );
}
