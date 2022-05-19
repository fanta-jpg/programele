import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Todo = ({navigation}) => {

    return (
        <View style={styles.container}>
          <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: '40%'}}>Užrašinė nebaigta</Text>
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

export default Todo;