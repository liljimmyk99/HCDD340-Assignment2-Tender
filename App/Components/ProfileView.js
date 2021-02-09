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
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}} >{profile.name}, </Text>
                    <Text>#{profile.id}</Text>
                </View>
                <View>
                    <Text style={{color: '#C5C5C5'}}> {profile.location} </Text>
                </View>
                
            </View>
        </View>
    );
}
const window = Dimensions.get("window")
const profileStyle = StyleSheet.create({
    picture: {
        height: window.height * 0.4,
        width: window.height * 0.4,
        borderRadius: 2,
        borderWidth: 1,
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
        borderWidth: 1,
        padding: 2,
        paddingLeft: 4,
        width: window.height * 0.4,
        height: window.height * 0.05,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    fullView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    }

});


export default ProfileView;