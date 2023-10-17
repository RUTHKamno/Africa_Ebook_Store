import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import Admin from './Admin';
import AdminBook from './AdminBook';


function AdminNav() {
  return (
    <Tab.Navigator 
       tabBarOptions={{
        activeTintColor:"gold"
      }}
    >
    <Tab.Screen name="Books" 
      options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="book" color={color} size={25} />
        ),
      }}
    component={AdminBook} />

    <Tab.Screen name="Home" 
      options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="home" color={color} size={25} />
        ),
      }}
    component={Home} />


    </Tab.Navigator>
  )
}

export default AdminNav