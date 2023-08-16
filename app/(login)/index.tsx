import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';
import {  Link, router } from 'expo-router';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { ExternalLink } from '../../components/ExternalLink';


export default function LandingPage() {
  const SignIn = () => {
    router.push('/login');
  }

  const SignUp = () => { 
    router.push('/sign-up');
  }

  return (
    <ImageBackground source={require('../../assets/images/signIn-bg.png')} style={styles.container}>
      <View style={styles.textContainer} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
        <Text style={styles.title}>STYLE-ME</Text>
        <Text style={styles.subTitle}>Say goodbye to fashion ruts and hello to endless inspiration at your fingertips!</Text>
      </View>
      <View style={styles.buttonsContainer} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      
        <TouchableOpacity style={styles.button} >
        <Link href="/login" style={styles.buttonText}>
          <Text style={styles.buttonText}>Sign In</Text>
          </Link>
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.button} onPress={SignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Roboto_Bold',
    marginBottom: 20,
  },
  subTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto_Bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '80%',
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto_Bold',
    textTransform: 'uppercase',
  },
});
