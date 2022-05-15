import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Todo from './screens/Todo';
import Settings from './screens/Settings';
import Details from './screens/Details';

import colors from './assets/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator
      screenOptions={{
          tabBarShowLabel: false,
          tabBarHeaderShown: false,
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: colors.gray,
          tabBarStyle: [
            {  
              backgroundColor: colors.white,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            null
          ]
        }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="home-outline" size={30} color={color} />
      }}/>

      <Tab.Screen name="Todo" component={Todo} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="create-outline" size={30} color={color} />
      }}/>

      <Tab.Screen name="Settings" component={Settings} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="settings-outline" size={30} color={color} />
      }}/>

    </Tab.Navigator>
  );
};


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
