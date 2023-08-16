import {Stack} from "expo-router";
import {useSelector} from "react-redux";
import { UserState } from "../../redux/slices/userSlice";
import Login from "../login";

export default function LandingPageLayout() {
  const user = useSelector((state: {user: UserState}) => state.user);
  
  return (
        <Stack 
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}