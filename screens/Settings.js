import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//const jsonData = require('../Duomenys.json');

const jsonData = [
  {
    key: "0",
    title: "1a klase",
  },
  {
    key: "1",
    title: "1b klase",
  },
  {
    key: "2",
    title: "1c klase",
  },
];

const Settings = ({navigation}) => {


    var [KEY, setKEY] = useState("1");

    const setTimetableKey = ({item}) => {
        setKEY("2");
        //alert('yo yo');
      };

    const renderTitles = ({item}) => {
      return(
        <Button title={item.title} onPress={(item) => setTimetableKey}></Button>
        //<Text>OJOJO</Text>
        //<TouchableOpacity style={{backgroundColor: 'red'}} onPress={({item}) => setTimetableKey}>
        //  <Text>{item.title}</Text>
        //</TouchableOpacity>
      );
    };

    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 26, fontWeight: 'bold',}}>ojkl</Text>
          <FlatList
            data={jsonData}
            renderItem={renderTitles}
            keyExtractor={(item) => item.key}
          />
          <Text>{jsonData[KEY].title}</Text>
        </View>
      );
};

export default Settings;