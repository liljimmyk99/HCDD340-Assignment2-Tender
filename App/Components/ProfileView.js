import * as React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {Images, Themes} from '../Themes';

const ProfileView = (profile={}) => {
    return (
        <View style={profileStyle.fullView}>
            <View style={profileStyle.pictureView}>
                <Image style={profileStyle.picture} source={profile.image}></Image>
            </View>
            <View style={profileStyle.textView}>
                <View style={profileStyle.profileInfo}>
                    <Text style={profileStyle.profileName} >{profile.name}, </Text>
                    <Text style={profileStyle.profileID}>#{profile.id}</Text>
                </View>
                <View>
                    <Text style={profileStyle.profileLocation}> {profile.location} </Text>
                </View>
                
            </View>
        </View>
    );
}
const window = Dimensions.get("window")
const profileStyle = StyleSheet.create({
    picture: {
        height: window.height * 0.35,
        width: window.height * 0.35,
        borderColor: "#C5C5C5",
        borderWidth: 3,
        zIndex: -1
    },
    pictureView: {
        flex: 2,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textView: {
        flex: 1,
        borderWidth: 3,
        borderColor: "#C5C5C5",
        padding: 2,
        paddingLeft: 4,
        paddingBottom: 5,
        width: window.height * 0.35,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    fullView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    },
    profileName: {
        fontWeight:'bold', 
        fontSize: 24
    },
    profileID: {
        fontSize: 24
    },
    profileLocation: {
        color: '#C5C5C5',
        fontSize: 16
    },
    profileInfo: {
        flexDirection: 'row'
    }

});


export default ProfileView;