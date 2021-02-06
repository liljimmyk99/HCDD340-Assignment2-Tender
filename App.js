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
        <View style={styles.buttonBarRadius}>
          <Image style={styles.buttonBarSmall} source={Images.rewind} />
        </View>
        <View style={styles.buttonBarRadius}>
          <Image style={styles.buttonBarLarge} source={Images.nope} />
        </View>
        <View style={styles.buttonBarRadius}>
          <Image style={styles.buttonBarSmall} source={Images.boost} />
        </View>
        <View style={styles.buttonBarRadius}>
          <Image style={styles.buttonBarLarge} source={Images.like} />
        </View>
        <View style={styles.buttonBarRadius}>
          <Image style={styles.buttonBarSmall} source={Images.superLike} />
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
    backgroundColor: "#21d6ff"
  },
  navigationBar: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'green',
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
      native: {
        height: 30
      },
      default:{
        height: 80
      }
    })
  },
  profileCard: {
    //Margin
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
    width:"50%",
  },
  buttonContainer: {
    //Margin
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: "40%",
    width: "70%",
    borderWidth: 3,
    borderColor: 'blue',
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

  buttonBarSmall: {
    //set Width and Heigh equal to percents
    flex: 1,
    height: 20,
    width: 20,
    padding: 30,
    
    resizeMode: "contain",
    //borderRadius: 500,
    //backgroundColor: "white",
  },
  buttonBarLarge: {
    //set Width and Heigh equal to percents
    flex: 2,
    height: 60,
    width: 60,
    resizeMode: "contain",
    //borderWidth: 0.5,
  },
  buttonBarRadius: {
    borderWidth: 3,
    borderRadius: 500,
    backgroundColor: "white",

  }
})