import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useGetProfileQuery } from '../../redux/api';
import { setUserProfile } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Avatar } from 'react-native-paper';

import { RootState } from '../../redux/store';

import { UserState } from '../../redux/slices/userSlice';

import {router} from 'expo-router';

export default function TabLayout() {
  const user = useSelector((state: {user: UserState}) => state.user);

  const colorScheme = useColorScheme();
  const imageUrl = "https://storage.googleapis.com/styleme-solo/1682329316739-IMG_7226.PNG";

  const dispatch = useDispatch();
  const userId = '';
  const { data: userProfile, error, isLoading } = useGetProfileQuery(userId);

  useEffect(() => {
    if (userProfile) {
      // Dispatch an action to store the user profile in Redux store
      const {user} = userProfile;
      dispatch(setUserProfile(user));
    }
  }, [userProfile, dispatch]);


  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerLeft: () => (
          <Link href="/profile" asChild>
            <Pressable>
              {({ pressed }) => (
               <Avatar.Image
               size={48}
               source={{ uri: imageUrl }} // Use an object with the 'uri' key
               style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
             />
              )}
            </Pressable>
          </Link>
        ),
        headerRight: () => (
          <Link href="/publish" asChild>
            <Pressable>
              {({ pressed }) => (
                <MaterialIcons
                  name="library-add"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        // headerTitle: `Hi, ${userName}!`,
      }}>
      <Tabs.Screen
        name="wardrobe"
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={24} name="wardrobe-outline" color={color} />,
        }}
      />
       <Tabs.Screen
        name="looks"
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={24} name="hanger" color={color} />,
        }}
      />
       <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="explore" color={color} />,
        }}
      />
       <Tabs.Screen
        name="contact"
        options={{
          title: 'Help',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="contact-support" color={color} />,
        }}
      />
    </Tabs>
  );
}
