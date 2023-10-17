import React, {useEffect} from 'react';
import { Text, ScrollView, View, StyleSheet,Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector} from 'react-redux';
import { fetchCarts } from '../src/slices/cart.slice';
import { deleteCart } from '../src/slices/cart.slice';


const imgs=[require('../assets/img/book1.jpg'),require('../assets/img/book2.jpg'),require('../assets/img/book3.jpg'),require('../assets/img/book4.jpg'),require('../assets/img/book5.jpg'),require('../assets/img/book6.jpg'),require('../assets/img/book7.jpg'),require('../assets/img/book8.jpg'),require('../assets/img/book9.jpg'),require('../assets/img/book10.jpg'),require('../assets/img/book11.jpg'),require('../assets/img/book12.jpg'),require('../assets/img/book13.jpg'),require('../assets/img/book14.jpg'),require('../assets/img/book15.jpg'),require('../assets/img/book16.jpg'),require('../assets/img/book17.jpg'),require('../assets/img/book18.jpg'),require('../assets/img/book18.jpg'),require('../assets/img/book19.jpg'),require('../assets/img/book20.jpg')];


function Cart({navigation,route}) {

  // const {id} = route.params

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.carts.cart);

  useEffect(() => {
    dispatch(fetchCarts()); // Dispatch l'action pour récupérer les livres au chargement de la page
  }, [dispatch]);
  

  const onDelete = id => {
    dispatch(deleteCart(id))
    .unwrap() // permet d'extraire la réponse de l'asyncthunk une fois la promesse résolue
    .then(rep => {
    navigation.navigate('HomeNav');
    console.log(rep);
     })
    .catch ((err) => console.log(err));
    }
  return (
    <ScrollView>
         <View style={styles.nav}>
            <View style={styles.nav_component}>
                <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                <TouchableOpacity
                        onPress={() => navigation.navigate('contact')}>
                         <Icon name="phone" size={30} color="black" style={styles.icon}/>
                </TouchableOpacity> 
                <TouchableOpacity
                        onPress={() => navigation.navigate('HomePage')}>
                        <Icon name="home" size={30} color="black" style={styles.icon1}/>
                </TouchableOpacity> 
            </View>
        </View>
        <View>
        <Text style={styles.panier}>Panier</Text>
        </View>
        
        {/* LIST OF Cart Product */}

      {cart.map((singleCart, index) => {
        return (<View style={styles.single_card} key={index}>
          <View style={[styles.card, styles.elevation]}>  
              <View style={styles.card_flex} >  
              
                  {/* <Image source={require('../assets/img/book1.jpg')} style={styles.book1} /> */}
                  <View style={styles.texts}>
                  <Text style={styles.title}>  
                  {singleCart.nom}
                  </Text>  
                  <Text style={styles.textCard}>  
                  Quantité: {singleCart.qty}
                  </Text> 
                  <Text style={styles.textCard}>  
                  Prix: {singleCart.prix}
                  </Text>  
                  </View>
                  
              </View> 
              <View style={styles.button_icons}>
              <TouchableOpacity
                      onPress={() => onDelete(singleCart.id)}
                      style={[styles.button]}>
                      <Icon name="trash" size={30} color="black" style={styles.buttonText}/>
              </TouchableOpacity> 
              </View> 
          </View>  
          </View>)
      })}
   



    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({

panier: {
   fontWeight: 'bold',
   color: '#CFB53B',
   fontSize: 30,
   textAlign: 'left',
   margin: 30
},
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
  fontSize: 27,
  lineHeight: 25,
  color: "black",
  fontWeight: "bold",
  marginBottom: 13,
  color: "#CFB53B",
  width: '75%',
},
title : {
  fontSize: 22,
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

textCard : {
  fontSize: 22,
  color:'black'
}
})