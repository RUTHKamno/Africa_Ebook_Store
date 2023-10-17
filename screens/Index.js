import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const imgs=[require('../assets/img/book1.jpg'),require('../assets/img/book2.jpg'),require('../assets/img/petitjo.jpg'),require('../assets/img/feu.jpg'),require('../assets/img/sahel.jpg'),require('../assets/img/book6.jpg'),require('../assets/img/book7.jpg'),require('../assets/img/book8.jpg'),require('../assets/img/book9.jpg'),require('../assets/img/book10.jpg'),require('../assets/img/book11.jpg'),require('../assets/img/book12.jpg'),require('../assets/img/book13.jpg'),require('../assets/img/book14.jpg'),require('../assets/img/book15.jpg'),require('../assets/img/book16.jpg'),require('../assets/img/book17.jpg'),require('../assets/img/book18.jpg'),require('../assets/img/book18.jpg'),require('../assets/img/book19.jpg'),require('../assets/img/book20.jpg')];

function Index({navigation, book}) {
   
  return (
    
    <View style={styles.single_card}>
        <View style={[styles.card, styles.elevation]}>  
            <View style={styles.card_flex} >  
                    <Image source={imgs[book.id]} style={styles.book1} />
                    <View style={styles.texts}>
                    <Text style={styles.title}>  
                    {book.nom}
                    </Text>  
                    <Text style={styles.author}>  
                   {book.auteur}
                    </Text> 
                    <Text style={styles.text_wrap}>  
                    {book.description}
                    </Text>  
                    </View>
                    
            </View>  
            <TouchableOpacity
                        onPress={() => navigation.navigate('Details', { id: book.id })}
                        style={[styles.button]}>
                        <Text style={[styles.buttonText]}>DETAILS</Text>
            </TouchableOpacity> 
        </View>  
    </View>
       
  )
}

export default Index

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
        bottom: 44
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
        width: 90,
        borderRadius: 10,
        backgroundColor: '#CFB53B',
        height: 30,
        marginLeft: 245,
        textAlign: 'center',
        justifyContent: 'center',
      },
    
    buttonText: {
        color: 'white',
        fontSize: 15,
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