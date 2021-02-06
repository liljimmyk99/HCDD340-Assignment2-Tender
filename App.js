import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions
} from 'react-native';
import { Images, Profiles } from './App/Themes';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <View>
        <Image style={styles.chat} source={Images.chat} />
        </View>
        <View>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        <View>
          <Image style={styles.chat} source={Images.chat} />
        </View>
      </View>
      <View style={styles.profileCard}>
        <Text>I am Profile Card</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Image style={styles.chat} source={Images.rewind} />
        </View>
        <View>
          <Image style={styles.chat} source={Images.nope} />
        </View>
        <View>
          <Image style={styles.chat} source={Images.boost} />
        </View>
        <View>
          <Image style={styles.chat} source={Images.like} />
        </View>
        <View>
          <Image style={styles.chat} source={Images.superLike} />
        </View>
      </View>
    </View>
  );
}
const window = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "white"
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    borderWidth: 3,
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
       height: 44
      },
      andriod: {
        height: 56
      },
      default: {
        height: 50
      },
    })
  },
  profileCard: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
    width:"50%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    borderWidth: 3,
  },
  logo: {
    //Set Width and Height equal to percent
    height: 100,
    width: 200,
    resizeMode: "stretch",
    flex: 3,
    borderWidth: 3,
    //borderRadius: 20 * 0.5,
    //borderWidth: 1,
  },
  chat: {
    //set Width and Heigh equal to percents
    flex: 1,
    height: 50,
    width: 50,
    tintColor: "#C5C5C5",
    borderWidth: 3,
    resizeMode: "contain"
  },
})