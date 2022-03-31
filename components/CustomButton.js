import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

 const styles = StyleSheet.create({
     button: {
       width: 50,
       height: 50,
       borderRadius: 30,
       elevation: 20,
       alignItems: 'center',
       justifyContent: 'center',
     },

     text: {
         fontSize: 26,
         color: 'white',
     },
   });

export default CustomButton;