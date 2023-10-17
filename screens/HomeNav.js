import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Index from './Index';
import BooksList from './BooksList';
import Cart from './Cart';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import Contact from './Contact';
import Details from './Details';

function HomeNav() {
  return (
    <Tab.Navigator 
       tabBarOptions={{
        activeTintColor:"gold"
      }}
    >
     <Tab.Screen name="Livres"
      options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="book" color={color} size={25} />
        ),
      }}
       component={BooksList} />
{/* 
      <Tab.Screen name="Index"
      options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="book" color={color} size={25} />
        ),
      }}
       component={Index} /> */}

      <Tab.Screen name="Acceuil" 
      options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="home" color={color} size={25} />
        ),
      }}
      component={Home} />
      
      <Tab.Screen name="Panier" 
        options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="shopping-cart" color={color} size={25} />
        ),
      }}
       component={Cart} />

      <Tab.Screen name="Contact" 
        options={{
        headerShown:false,
        tabBarIcon: ({color}) => (
        <Icon name="phone" color={color} size={25} />
        ),
      }}
       component={Contact} />

      {/* <Tab.Screen name="Contact_us" component={SettingsScreen} /> */}
    </Tab.Navigator>
  )
}

export default HomeNav