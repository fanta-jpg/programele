import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import colors from '../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = require('../assets/details_background.png');
const height = Dimensions.get('window').height;

const Details = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source = {image} style={styles.background}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color={colors.darkgray}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.details}>
                <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: '40%'}}>Detalių ekranas</Text>
            </View>
        </SafeAreaView>

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
        marginTop: '-5%',
        borderRadius: 25,
        backgroundColor: colors.white,
        alignItems: 'center',

    },
    
    backButton:{
        marginLeft: '1%',
        marginTop: '8%',
    },
});

export default Details;