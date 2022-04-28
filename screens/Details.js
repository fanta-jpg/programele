import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const image = require('../assets/temp_background.png');
const height = Dimensions.get('window').height;

const Details = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground source = {image} style={styles.background}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color={colors.white}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.details}>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background:{
        height: height * 0.3,
    },

    details:{
        flex: 1,
        marginTop: -20,
        borderRadius: 25,
        backgroundColor: colors.white,

    },
    
    backButton:{
        marginLeft: '1%',
        marginTop: '8%',

    },
});

export default Details;