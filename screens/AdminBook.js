import React, { useEffect } from 'react'
import Admin from './Admin';
import { useDispatch, useSelector} from 'react-redux';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchBooks } from '../src/slices/books.slice';


export default function AdminBook({navigation}) {

    // 
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
  
    useEffect(() => {
      dispatch(fetchBooks()); // Dispatch l'action pour récupérer les livres au chargement de la page
    }, [dispatch]);

  return (
    <ScrollView>
        {/* NAVBAR */}
        <View style={styles.nav}>
            <View style={styles.nav_component}>
                <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}>
                         <Icon name="home" size={30} color="black" style={styles.icon}/>
                </TouchableOpacity> 
                <TouchableOpacity
                        onPress={() => navigation.navigate('Form')}>
                         <Icon name="plus" size={30} color="black" style={styles.icon1}/>
                </TouchableOpacity> 
            </View>
        </View>
        {/* DESCRIPTION */}
        <View style={styles.text} >
            <Text style={styles.description}>Nos bibliothèques numériques en ligne
            : une source unique de contenus africains</Text>
            <View style={[styles.card, styles.elevation]}>  
                <View>  
                    <Text style={styles.heading}>  
                    Plus 3600 titres multi domaines, 50% en 
                    anglais et 50% en francais et quelques titres
                    en langues locales, disponible en abonnement ... 
                    </Text>  
                </View>  
                {/* <Text>  
                    By using the elevation style props to apply box-shadow for Android devices  
                </Text>   */}
            </View>  
        </View>

    {/* LIST OF BOOKS */}
    <View>
      {books.map((book, index) => {
        return <Admin key={index} book={book} navigation={navigation} />;
      })}
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
