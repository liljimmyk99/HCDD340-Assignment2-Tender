import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  ImageBackground,
  Button
} from 'react-native';
import ProfileView from './App/Components/ProfileView';
import { Images, Profiles } from './App/Themes';


export default function App() {
  const [profile, setProfile] = useState(Profiles.hosler)
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <View>
        <AntDesign name="setting" size={window.width * 0.1} color="#C5C5C5" />
        </View>
        <View>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        <View>
          <Image style={styles.chat} source={Images.chat} />
        </View>
      </View>
      <View style={styles.profileCardView}>
        {ProfileView(profile)}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBarRadius}>
          {//<Button title='' onPress={() => {setProfile(Profiles.random())}}></Button>
          <Image style={styles.buttonBarSmall} source={Images.rewind} />
          /*<ImageBackground style={styles.smallCircle}></ImageBackground> */}
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
    backgroundColor: "#dceef5"
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    justifyContent: 'space-around',
    //Platform.OS === 'ios'
    ...Platform.select({
      ios: {
       height: 44,
      //  borderBottomColor: "black",
        borderWidth: 3,
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
    height: "60%",
    width:"90%",
    borderWidth: 1.5
  },
  buttonContainer: {
    //Margin
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'yellow',
    borderWidth: 3,
    height: "4%",
    width: "90%",
  },
  logo: {
    //Set Width and Height equal to percent
    height: window.width * 0.2,
    width: window.width * 0.4,
    resizeMode: "contain",
    flex: 3,
    borderBottomColor: "black",
    borderWidth: 1,
    //borderRadius: 20 * 0.5,
    //borderWidth: 1,
  },
  chat: {
    //set Width and Heigh equal to percents
    flex: 1,
    height: window.width * 0.1,
    width: window.width * 0.1,
    tintColor: "#C5C5C5",
    resizeMode: "contain",

  },
  buttonBarSmall: {
    //set Width and Heigh equal to percents
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: 'red',
    resizeMode: "contain",
  },
  buttonBarLarge: {
    //set Width and Heigh equal to percents
    height: 70,
    width: 70,
    borderRadius: 70 * 0.5,
    borderWidth: 0.5,
    borderColor: 'blue',
    backgroundColor: "white",
    resizeMode: "contain",

  },
  buttonBarRadius: {

  },
})