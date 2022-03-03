import * as React from 'react';
import {View, Text} from 'react-native';

export default function StatsPage({navigation}){
    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 26, fontWeight: 'bold',}}>cia statistikos puslapis</Text>
        </View>
      );
}

// const styles = StyleSheet.create({
//     screenContainer: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     tempText: {
//         fontSize: 26,
//         fontWeight: 'bold',
//     },
//   });