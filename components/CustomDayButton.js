import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors';

const CustomDayButton = (props) => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.bgColor}, {opacity: props.opacity}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

 const styles = StyleSheet.create({
     button: {
       width: 50,
       height: 50,
       borderRadius: 10,
       borderWidth: 2,
       alignItems: 'center',
       borderColor: colors.green,
       justifyContent: 'center',
     },

     text: {
         fontSize: 24,
         fontWeight: 'bold',
         color: colors.black,
     },
   });

export default CustomDayButton;