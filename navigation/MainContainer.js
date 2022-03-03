import * as React from 'react';


import { StyleSheetView, Text } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//puslapiai
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import StatsPage from './pages/StatsPage'

//puslapiu pavadinimai
const homeName = 'Home';
const settingsName = 'Settings';
const statsName = 'Stats';

//sukuriame apatini nav bar
const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName = {homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let routeName = route.name;
                    let iconName;

                    if(routeName === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }

                    else if(routeName === statsName){
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    else if(routeName === settingsName){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },


                
            })}>
            
             {/* tabBarOptions={{
                 activeTintColor: '#00FFCF',
                 inactiveTintColor: '#29ECAD',
                 labelStyle: { paddingBottom: 10, fontSize: 10 },
                 style: { padding: 10, height: 70}
             }} */}
            

            <Tab.Screen name={homeName} component={HomePage}/>
            <Tab.Screen name={statsName} component={StatsPage}/>
            <Tab.Screen name={settingsName} component={SettingsPage}/>

            </Tab.Navigator>

        </NavigationContainer>
    );
}