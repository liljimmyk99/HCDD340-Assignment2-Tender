import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Images, Themes} from '../Themes';

const ProfileView = (profile={}) => {
    return (
        <View style={profileStyle.pictureView}>
            <Image style={profileStyle.picture} source={'../Images/tree-profiles/banana.jpg'}></Image>

        </View>
    );
}

const profileStyle = StyleSheet.create({
    picture: {
        height: 100,
        width: 100,
        //borderRadius: 60 * 0.5,
        borderWidth: 1,
    },
    pictureView: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

});


export default ProfileView;