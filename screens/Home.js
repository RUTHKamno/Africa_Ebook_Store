import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';


function Home({navigation}) {
  return (
    <View style={styles.bblack}>
      <View style={styles.nav}>
      <Image style= {styles.image}
        source={require('../assets/img/logo.png')}
      />
      <TouchableOpacity
          onPress={() => navigation.navigate("LoginAdmin")}>
          <Icon name="admin-panel-settings" size={35} color="black" style={[styles.icon]}/>
      </TouchableOpacity>
       <Text style={styles.text}>Bienvenue à Africa Ebook Store !!</Text>
      </View>
      <ImageBackground source={require('../assets/img/background_10.jpg')} style={styles.body} />
      <View style={styles.button}>
      <Button
        title="S'INSCRIRE"
        color="#000000c0"
        onPress={() => navigation.navigate("Signin") }
      />

      <Button
        title="SE CONNECTER"
        color="#000000c0"
        onPress={() => navigation.navigate("Login")}
      />
      </View>
    </View>
    
   

  )
}

export default Home

const styles =StyleSheet.create({
  body: {
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          top: 90,
          height: 380
        },
  bblack: {
        flex: 1,
        backgroundColor: "#000000c0", 

       },
  text : {
        textAlign: 'right',
        fontFamily: 'DancingScript',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 40
      },
  image: {
      width: 100,
      height: 60,
      position: 'relative',
      top: 30,
      left: 30
     },
  nav : {
    display: 'grid',
    gridTemplateColumn : 'repeat(50px, 1fr)'
     },
  button: {
      position: 'relative',
      top: 55,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
     },
  icon : {
      position: 'relative',
      left: 330,
      color: 'white',
      bottom: 25,

     }
})