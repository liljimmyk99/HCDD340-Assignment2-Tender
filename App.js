import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  ImageBackground
} from 'react-native';
import ProfileView from './App/Components/ProfileView';
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
      <View style={styles.profileCardView}>
        {ProfileView(Profiles.random())}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBarRadius}>
          <Image style={styles.buttonBarSmall} source={Images.rewind} />
          {/*<ImageBackground style={styles.smallCircle}></ImageBackground> */}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#dceef5"
  },
  navigationBar: {
    flex: 1,
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
        height: 20
      }
    })
  },
  profileCardView: {
    //Margin
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#C5C5C5',
    height: "60%",
    width:"90%",
  },
  buttonContainer: {
    //Margin
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: "10%",
    width: "90%",
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
    zIndex: 10,
    
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
  },
  buttonBarRadius: {
    borderWidth: 3,
    borderRadius: 500,
    backgroundColor: "white",
  },
  smallCircle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: "red",
    zIndex: 1,
  }
})