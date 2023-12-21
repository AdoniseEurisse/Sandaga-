import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import GetScreen from './screens/GetScreen';
import BrocoScreen from './screens/BrocoScreen';
import LastScreen from './screens/LastScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Get" component={GetScreen} />
        <Tab.Screen name="Broco" component={BrocoScreen} />
        <Tab.Screen name="Last" component={LastScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
