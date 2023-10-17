import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function CartModel({cart, navigation}) {
  return (
  
    <View style={styles.single_card}>
    <View style={[styles.card, styles.elevation]}>  
        <View style={styles.card_flex} >  
        
            <Image source={require('../assets/img/book1.jpg')} style={styles.book1} />
            <View style={styles.texts}>
            <Text style={styles.title}>  
            {cart.nom}
            </Text>  
            <Text style={styles.author}>  
            {cart.qty}
            </Text> 
            <Text style={styles.author}>  
            {cart.price}
            </Text>  
            </View>
            
        </View> 
        <View style={styles.button_icons}>
        <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={[styles.button]}>
                <Icon name="trash" size={30} color="black" style={styles.buttonText}/>
        </TouchableOpacity> 
        </View> 
    </View>  
    </View>
  )
}

export default CartModel

const styles = StyleSheet.create({
    nav : {
        
        backgroundColor: '#fff',
        borderTopColor: "grey",
        height: 100,
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {width: -2, height: 4},
        shadowColor: '#52006A',  
        elevation: 30,  
    },
    logo : {
        width: 100,
        height: 60,
        position: 'relative',
        top: 30,
        left: 30
    },
    icon : {
        position: 'relative',
        left: 300,
        bottom: 14
    },
    icon1 : {
        position: 'relative',
        left: 350,
        bottom: 42
    },
    text: {
        position: 'relative',
        top: 30,
        margin: 20
    },
    description :{
        color: "#CFB53B",
        fontSize: 22,
        textTransform: 'capitalize',
        letterSpacing: 1,
        lineHeight: 30
    },
    
    heading: {  
        fontSize: 17,
        lineHeight: 25,
        color: "black",
        fontWeight: "bold",
        paddingTop: 5,
        paddingLeft: 10,  
        marginBottom: 13,
      },  

    card: {  
        position: 'relative',
        top: 19,
        backgroundColor: 'white',  
        borderRadius: 8,  
        paddingVertical: 15,  
        paddingHorizontal: 10,  
        width: '100%',  
        marginVertical: 10,  
        margin: 0,

      },  
    elevation: {  
        shadowColor: '#52006A',  
        elevation: 20,  
      },  
    book1 : {
        width: 100,
        height: 150,
        textAlign:'left',

      },
    card_flex : {
        lineHeight: 30,
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    single_card : {
        margin: 20
      },
    text_wrap: {
        fontSize: 17,
        lineHeight: 25,
        color: "black",
        fontWeight: "bold",
        marginBottom: 13,
        color: "#CFB53B",
        width: '75%',
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textDecorationLine:'underline',
        color: "#CFB53B",
        width: '75%',
    },
    texts:{
        position:'relative',
        bottom: 8,
        paddingLeft: 29,
    },
    button: {
        width: 50,
        borderRadius: 10,
        marginBottom:10,
        backgroundColor: '#CFB53B',
        height: 30,
        marginLeft: 275,
        textAlign: 'center',
        justifyContent: 'center',
      },
    button_icons : {
        width: 390,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icons : {
        position:'relative',
        bottom: 80,
        marginRight:5,
        display: 'flex',
        flexDirection: 'row',
        lineHeight: 70,
        justifyContent :'flex-end',
      },
      social_icon : {
        width:60,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: 'center',
        marginRight:8,
        paddingLeft:20
      },
      text_footer : {
        color: 'white',
        lineHeight: 30,
        marginLeft: 20,
        fontWeight:'bold',
        textTransform: 'capitalize'
      },
      footer : {
        backgroundColor: '#000000c0',
        marginTop: 60,

      }
})