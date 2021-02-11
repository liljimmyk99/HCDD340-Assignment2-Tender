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
  TouchableOpacity
} from 'react-native';
import ProfileView from './App/Components/ProfileView';
import { Images, Profiles } from './App/Themes';

export default function App() {
  const [profile, setProfile] = useState(Profiles.hosler)
  const [previousPro, setPreviousProfile] = useState({})
  const nextProfile = () => {
    console.log("nextProfile function activated")
    console.log("Current Profile: " + profile.name)
    console.log("Current previousPro: " + previousPro.name)
    setPreviousProfile(profile)
    setProfile(Profiles.random)
    console.log("New Profile: " + profile.name)
    console.log("New previousPro: " + previousPro.name)
    console.log("-------------------------------")
  
  }
  const previousProfile = () => {
    console.log("previousProfile function activated")
    setProfile(previousPro)
    console.log("-------------------------------")
  
  }
  const boost = () => {
    console.log("boost function activated")
    console.log("BOOOOOOOOOOOOOOOOOOSSSSSSSSSSSSSTTTTTTTTTTTTTTT")
    console.log("-------------------------------")
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <View>
          <TouchableOpacity>
              <AntDesign name="setting" size={window.width * 0.1} color="#C5C5C5" />
          </TouchableOpacity>
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
        <TouchableOpacity onPress={previousProfile} >
          <Image style={styles.buttonBarSmall} source={Images.rewind} />
        </TouchableOpacity>
        <TouchableOpacity onPress= {nextProfile}>
          <Image style={styles.buttonBarLarge} source={Images.nope} />
        </TouchableOpacity>
        <TouchableOpacity onPress= {boost}>
          <Image style={styles.buttonBarSmall} source={Images.boost} />
        </TouchableOpacity>
        <TouchableOpacity onPress= {nextProfile}>
          <Image style={styles.buttonBarLarge} source={Images.like} />
        </TouchableOpacity>
        <TouchableOpacity onPress= {boost}>
          <Image style={styles.buttonBarSmall} source={Images.superLike} />
        </TouchableOpacity>
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
  },
  buttonContainer: {
    //Margin
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: "4%",
    width: "90%",
  },
  logo: {
    //Set Width and Height equal to percent
    height: window.width * 0.2,
    width: window.width * 0.4,
    resizeMode: "contain",
    flex: 3,
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
    borderColor: 'white',
    resizeMode: "contain",
  },
  buttonBarLarge: {
    //set Width and Heigh equal to percents
    height: 70,
    width: 70,
    borderRadius: 70 * 0.5,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: "white",
    resizeMode: "contain",

  },
  buttonBarRadius: {

  },
})