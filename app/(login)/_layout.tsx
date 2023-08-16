import {Stack} from "expo-router";
import {useSelector} from "react-redux";
import { UserState } from "../../redux/slices/userSlice";

export default function LandingPageLayout() {
  const user = useSelector((state: {user: UserState}) => state.user);
  
  return (
        <Stack 
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="sign-in" options={{ headerShown: false, presentation: 'modal' }}/>
            <Stack.Screen name="sign-up" options={{ headerShown: false, presentation: 'modal' }}/>
        </Stack>
    )
}