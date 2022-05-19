import * as React from 'react';
import {StyleSheet, View, Text,} from 'react-native';


const Settings = ({navigation}) => {

     return (
      <View style={styles.container}>
        <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: '40%'}}>Čia turėjo būti tvrakaraščių pasirinkimas, kurio nepavyko padaryti</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
  },
});

export default Settings;