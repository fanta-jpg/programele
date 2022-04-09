import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomDayButton = props => {
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
       alignItems: 'center',
       elevation: 15,
       justifyContent: 'center',
     },

     text: {
         fontSize: 24,
         fontWeight: 'bold',
         color: 'white',
     },
   });

export default CustomDayButton;