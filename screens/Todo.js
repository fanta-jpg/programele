import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import PamokuLangas from '../components/PamokuLangas';

const jsonData = require('../Duomenys.json');

const Todo = ({navigation}) => {


    const renderIt = ({item}) => {
      return(
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <PamokuLangas pamoka={item}/>
        </TouchableOpacity>
        
      );
    };


    return (
        <View style={styles.container}>
          <Text style={{fontSize: 26, fontWeight: 'bold',}}>abcd</Text>
          <FlatList
            data={jsonData[0].pirmadienis}
            renderItem={renderIt}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});

export default Todo;