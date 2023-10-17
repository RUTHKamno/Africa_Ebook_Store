import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Login from './screens/Login';
import Index from './screens/Index';
import Details from './screens/Details';
import Cart from './screens/Cart';
import HomeNav from './screens/HomeNav';
import Admin from './screens/Admin';
import Form from './screens/Form';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
import { Provider } from 'react-redux';
import store from './src/store';
import Contact from './screens/Contact';
import AdminNav from './screens/AdminNav';
import ModifyBook from './screens/ModifyBook';
import LoginAdmin from './screens/LoginAdmin';
import HomePage from './screens/HomePage';


function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{headerShown: false}} />
        
        <Stack.Screen 
        name='Signin'
        component={Signin}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='Login'
        component={Login}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='HomeNav'
        component={HomeNav}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='AdminNav'
        component={AdminNav}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='Form'
        component={Form}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='contact'
        component={Contact}
        options={{headerShown: false}} />


        {/* A SUPPRIMER APRES */}
        <Stack.Screen 
        name='Index'
        component={Index}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='Admin'
        component={Admin}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='ModifyBook'
        component={ModifyBook}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='Details'
        component={Details}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='LoginAdmin'
        component={LoginAdmin}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='Cart'
        component={Cart}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='HomePage'
        component={HomePage}
        options={{headerShown: false}} />

        <Stack.Screen 
        name='Contacts'
        component={Contact}
        options={{headerShown: false}} />


      </Stack.Navigator>

    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  )
}

export default App













