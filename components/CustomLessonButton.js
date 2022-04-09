import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomLessonButton = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

 const styles = StyleSheet.create({
     button: {
       height: 40,
       borderRadius: 10,
       marginTop: 10,
       alignItems: 'center',
       justifyContent: 'center',
       
     },

     text: {
         fontSize: 26,
         fontWeight: 'bold',
         color: 'white',
     },
   });

export default CustomLessonButton;