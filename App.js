import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Images, Profiles } from './App/Themes';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.navigationBar}>
        <Text>I am Nav Bar</Text>
      </View>

      <View style={styles.profileCard}>
        <Text>I am Profile Card</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>I am Button Bar</Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})