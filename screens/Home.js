import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomDayButton from '../components/CustomDayButton';
import colors from '../assets/colors';
import PamokuLangas from '../components/PamokuLangas';

const jsonData = require('../Duomenys.json');

const Home = ({navigation}) => {

    const [tvarkarastis, setTvarkarastis] = useState([]);
    const [selected, setSelected] = useState(null);

    const pirmadienis = () => {
      setTvarkarastis(jsonData[0].pirmadienis);
      setSelected("1");
    }

    const antradienis = () => {
      setTvarkarastis(jsonData[0].antradienis);
      setSelected("2");
    }

    const treciadienis = () => {
      setTvarkarastis(jsonData[0].treciadienis);
      setSelected("3");
    }

    const ketvirtadienis = () => {
      setTvarkarastis(jsonData[0].ketvirtadienis);
      setSelected("4");
    }

    const penktadienis = () => {
      setTvarkarastis(jsonData[0].penktadienis);
      setSelected("5");
    }

    return (
        <View style={styles.container}>
          {/*antraste*/}
          <SafeAreaView>
            <View style={styles.headerWrapper}>

              <CustomDayButton onPress={pirmadienis} text="P" opacity={"1" === selected ? 0.8 : 0.6} bgColor = {"1" === selected ? colors.green : null} />
              <CustomDayButton onPress={antradienis} text="A" opacity={"2" === selected ? 0.8 : 0.6} bgColor = {"2" === selected ? colors.green : null} />
              <CustomDayButton onPress={treciadienis} text="T" opacity={"3" === selected ? 0.8 : 0.6} bgColor = {"3" === selected ? colors.green : null} />
              <CustomDayButton onPress={ketvirtadienis} text="K" opacity={"4" === selected ? 0.8 : 0.6} bgColor = {"4" === selected ? colors.green : null} />
              <CustomDayButton onPress={penktadienis} text="P" opacity={"5" === selected ? 0.8 : 0.6} bgColor = {"5" === selected ? colors.green : null} />

            </View>
          </SafeAreaView>

          {/*pamokos*/}
          <View style={styles.pamokosWrapper}>
            <Text style={styles.pamokosText}>Pamokos</Text>
            <View style={styles.pamokosUnderline}></View>
          </View>

          {/*pamoku buttonai*/}
          <ScrollView style={styles.pamokosButtons}>
            <PamokuLangas pamokosNr="1" pamoka={tvarkarastis[0]} pamokosPradzia="8.00" pamokosPabaiga="8.45"/>
            <PamokuLangas pamokosNr="2" pamoka={tvarkarastis[1]} pamokosPradzia="8.55" pamokosPabaiga="9.40"/>
            <PamokuLangas pamokosNr="3" pamoka={tvarkarastis[2]} pamokosPradzia="9.55" pamokosPabaiga="10.40"/>
            <PamokuLangas pamokosNr="4" pamoka={tvarkarastis[3]} pamokosPradzia="11.00" pamokosPabaiga="11.45"/>
            <PamokuLangas pamokosNr="5" pamoka={tvarkarastis[4]} pamokosPradzia="12.15" pamokosPabaiga="13.00"/>
            <PamokuLangas pamokosNr="6" pamoka={tvarkarastis[5]} pamokosPradzia="13.20" pamokosPabaiga="14.05"/>
            <PamokuLangas pamokosNr="7" pamoka={tvarkarastis[6]} pamokosPradzia="14.15" pamokosPabaiga="15.00"/>
            <PamokuLangas pamokosNr="8" pamoka={tvarkarastis[7]} pamokosPradzia="15.10" pamokosPabaiga="15.55"/>
          </ScrollView>

        </View>
      );
};

export default Home;

 const styles = StyleSheet.create({

   container:{
     flex:1,
   },

   headerWrapper:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingHorizontal: 25,
     marginTop: '10%',
     //backgroundColor: "#13E4EE",
   },

   pamokosWrapper:{
     paddingHorizontal: 30,
     marginTop: 10,
     /*backgroundColor: "#078BC2",*/
   },

   pamokosText:{
    fontSize: 24,
    fontWeight: 'bold',
   },

   pamokosUnderline:{
     backgroundColor: colors.green,
     borderRadius: 80,
     height: 4,
   },

   pamokosButtons:{
     flexDirection: 'column',
     marginTop: '2%',
     paddingHorizontal: '6%',
     width: '100%',
   },

 });
  