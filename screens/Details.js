import React from 'react'
import { Text, ScrollView, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from './Cart';
import { fetchBook } from '../src/slices/books.slice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../src/slices/cart.slice';


const imgs=[require('../assets/img/book1.jpg'),require('../assets/img/book2.jpg'),require('../assets/img/petitjo.jpg'),require('../assets/img/feu.jpg'),require('../assets/img/sahel.jpg'),require('../assets/img/book6.jpg'),require('../assets/img/book7.jpg'),require('../assets/img/book8.jpg'),require('../assets/img/book9.jpg'),require('../assets/img/book10.jpg'),require('../assets/img/book11.jpg'),require('../assets/img/book12.jpg'),require('../assets/img/book13.jpg'),require('../assets/img/book14.jpg'),require('../assets/img/book15.jpg'),require('../assets/img/book16.jpg'),require('../assets/img/book17.jpg'),require('../assets/img/book18.jpg'),require('../assets/img/book18.jpg'),require('../assets/img/book19.jpg'),require('../assets/img/book20.jpg')];


function Details({navigation, route}) {

    const {id} = route.params

    const dispatch = useDispatch();
    const book = useSelector((state) => state.books.currentBook);
  
    useEffect(() => {
      dispatch(fetchBook(id)); // Dispatch l'action pour récupérer les livres au chargement de la page
    }, [dispatch]);

    const onSubmit = id => {
        dispatch(addToCart(id))
        .unwrap() // permet d'extraire la réponse de l'asyncthunk une fois la promesse résolue
        .then(rep => {
        navigation.navigate('Cart');
        console.log(rep);
         })
        .catch ((err) => console.log(err));
    
    };


  return (
    <ScrollView>
        <View style={styles.nav}>
            <View style={styles.nav_component}>
                <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}>
                        <Icon name="shopping-cart" size={30} color="black" style={styles.icon}/>
                </TouchableOpacity> 
                
                <TouchableOpacity
                        onPress={() => navigation.navigate('HomeNav')}>
                         <Icon name="book" size={30} color="black" style={styles.icon1}/>
                </TouchableOpacity> 
                
            </View>
        </View>

        <Text style={styles.title} >{book.nom}</Text>
        {/* <Text style={styles.title} >{id}</Text> */}
        <Image source={imgs[id]} style={styles.image} />
        <View style={styles.informations}>
            <TouchableOpacity
                onPress={() => onSubmit(id)}>
                <Text style={styles.informations1}>AJOUTER AU PANIER</Text>
            </TouchableOpacity> 
            <Text style={styles.informations2}>{book.price} FCFA</Text>
        </View>

        <View style={styles.about} >
            <Text style={styles.about_author}>{book.auteur}</Text>
            <Text style={styles.about_book}>{book.description}</Text>
        </View>
        <View style={styles.text}>
            <View style={[styles.card, styles.elevation]}>  
                <View>  
                    <Text style={styles.heading}>  
                    {book.resume}
                    </Text>  
                </View>  
            </View>  
        </View>
        
        {/************************************** FOOTER ******************************* */}
        <View style={styles.footer} >
            <Text style={styles.text_footer}>Contact</Text>
            <Text style={styles.text_footer}>A propos </Text>
            <Text style={styles.text_footer}>PANIER </Text>
            <View style={styles.icons}>
                <Icon name="facebook" size={30} color="black" style={styles.social_icon}/>
                <Icon name="twitter" size={30} color="black" style={styles.social_icon}/>
                <Icon name="google" size={30} color="black" style={styles.social_icon}/>

            </View>
        </View>

    </ScrollView>
  )
}

export default Details

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
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        letterSpacing: 2,
        color: "#CFB53B",
    },
    image : {
        width: 100,
        height: 150,
        marginLeft: 152,
        marginTop: 40
    },
    informations: {
        backgroundColor: "#000000c0",
        alignItems: 'center',
        lineHeight: 10,
        margin: 15
    },
    informations1: {
        fontWeight: 'bold',
        color: '#CFB53B',
        padding: 5
    },
    informations2: {
        color: "white"
    },
    about: {
        margin: 15
    },
    about_author: {
       fontSize: 15,
       fontWeight: 'bold',
    },
    about_book: {
        fontSize: 22,
        textDecorationLine: 'underline',
        color: '#CFB53B',

     },
    card: {  
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
        elevation: 30,  
      }, 
    text: {
        margin: 20
     },
    heading: {  
        fontSize: 17,
        lineHeight: 30,
        paddingTop: 5,
        paddingLeft: 10,  
        marginBottom: 13,
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