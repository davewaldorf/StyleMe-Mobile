import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import { User } from '../../types/User';

export default function TabOneScreen() {
    const [profile, setProfile] = useState(null);
    const { data, isLoading, error } = useFetch('profile/647b7a45f034f58ec0c1b0d5', 'GET');

    
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
