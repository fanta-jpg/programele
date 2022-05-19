import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity}  from 'react-native';
import CustomDayButton from '../components/CustomDayButton';
import colors from '../assets/colors';
import PamokuLangas from '../components/PamokuLangas';

const height = Dimensions.get('window').height;

const jsonData = require('../Duomenys.json');

const Home = ({navigation}) => {

    const [diena, setDiena] = useState([]);
    const [selected, setSelected] = useState(null);
    const [tvarkarastis, setTvarkarastis] = useState(0);

    const pirmadienis = () => {
      setDiena(jsonData[tvarkarastis].pirmadienis);
      setSelected("1");
    }

    const antradienis = () => {
      setDiena(jsonData[tvarkarastis].antradienis);
      setSelected("2");
    }

    const treciadienis = () => {
      setDiena(jsonData[tvarkarastis].treciadienis);
      setSelected("3");
    }

    const ketvirtadienis = () => {
      setDiena(jsonData[tvarkarastis].ketvirtadienis);
      setSelected("4");
    }

    const penktadienis = () => {
      setDiena(jsonData[tvarkarastis].penktadienis);
      setSelected("5");
    }

    const keistiTvarkarasti = () => {
      setTvarkarastis((tvarkarastis+1)%401);
    }

    const goToDetails = () => {
      navigation.navigate("Details");
    }

    return (
        <View style={styles.container}>
          {/*savaites dienos*/}
          <SafeAreaView>
            <View style={styles.headerWrapper}>

              <CustomDayButton onPress={pirmadienis} text="P" opacity={"1" === selected ? 0.8 : 0.6} bgColor = {"1" === selected ? colors.green : null} />
              <CustomDayButton onPress={antradienis} text="A" opacity={"2" === selected ? 0.8 : 0.6} bgColor = {"2" === selected ? colors.green : null} />
              <CustomDayButton onPress={treciadienis} text="T" opacity={"3" === selected ? 0.8 : 0.6} bgColor = {"3" === selected ? colors.green : null} />
              <CustomDayButton onPress={ketvirtadienis} text="K" opacity={"4" === selected ? 0.8 : 0.6} bgColor = {"4" === selected ? colors.green : null} />
              <CustomDayButton onPress={penktadienis} text="P" opacity={"5" === selected ? 0.8 : 0.6} bgColor = {"5" === selected ? colors.green : null} />

            </View>
          </SafeAreaView>

          {/*tvarkarascio keitimas*/}
          <View style={styles.pamokosWrapper}>
            <Text style={styles.pamokosText}>{jsonData[tvarkarastis].title}</Text>
            <View style={styles.pamokosUnderline}></View>
            <TouchableOpacity style={styles.changeTvarkarastis} onPress={keistiTvarkarasti}>
              <Text style={styles.tvarkarastisTitle}>Keisti tvarkaraštį</Text>
            </TouchableOpacity>
          </View>

          {/*pamoku buttonai*/}
          <ScrollView style={styles.pamokosButtons}>
            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="1" pamoka={diena[0]} pamokosPradzia="8.00" pamokosPabaiga="8.45"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="2" pamoka={diena[1]} pamokosPradzia="8.55" pamokosPabaiga="9.40"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="3" pamoka={diena[2]} pamokosPradzia="9.55" pamokosPabaiga="10.40"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="4" pamoka={diena[3]} pamokosPradzia="11.00" pamokosPabaiga="11.45"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="5" pamoka={diena[4]} pamokosPradzia="12.15" pamokosPabaiga="13.00"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="6" pamoka={diena[5]} pamokosPradzia="13.20" pamokosPabaiga="14.05"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="7" pamoka={diena[6]} pamokosPradzia="14.15" pamokosPabaiga="15.00"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToDetails}>
              <PamokuLangas pamokosNr="8" pamoka={diena[7]} pamokosPradzia="15.10" pamokosPabaiga="15.55"/>
            </TouchableOpacity>
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
     paddingHorizontal: '5%',
     marginTop: '10%',
   },

   pamokosWrapper:{
     paddingHorizontal: '5%',
     marginTop: '1%',
   },

   pamokosText:{
    fontSize: 24,
    fontWeight: 'bold',
   },

   pamokosUnderline:{
     backgroundColor: colors.green,
     borderRadius: 80,
     height: height*0.005,
   },

   changeTvarkarastis:{
     alignItems: 'center',
     marginTop: '2%',
     height: height*0.05,
     borderRadius: 10,
     borderWidth: 2,
     borderColor: colors.green,
     backgroundColor: colors.white,
     paddingVertical: '1%',
   },

   tvarkarastisTitle:{
     fontSize: 15,
     fontWeight: 'bold'
   },
   pamokosButtons:{
     flexDirection: 'column',
     marginTop: '2%',
     paddingHorizontal: '6%',
     width: '100%',
   },

 });
  