import React from 'react'
import { Text, ScrollView, View, StyleSheet,Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';




function HomePage({navigation}) {

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

        <Text style={styles.textNav}>BIENVENUE A  AFRICA EBOOK STORE !! </Text>
        <View>
            <Image source={require('../assets/img/book16.jpg')} style={styles.image} />
        </View>
        <Text style={styles.textQuiz}> POURQUOI EBOOK STORE  ?? </Text>
        <View style={styles.ViewQuiz}>
            <View>
            <Image source={require('../assets/img/know-removebg-preview.png')} style={[styles.imgQuiz]} />
            </View>
            <View>
            <Image source={require('../assets/img/diversity-removebg-preview.png')} style={[styles.imgQuiz]} />
            </View>
            <View>
            <Image source={require('../assets/img/unity2-removebg-preview.png')} style={[styles.imgQuiz1]} />
            </View>
        </View>
        <Text style={styles.textQuiz}> NOS LIVRES POPULAIRES   </Text>

        {/* ///////////////////PREMIER LIVRE////////////////// */}
        <View style={styles.single_card}>
        <View style={[styles.card, styles.elevation]}>  
            <View style={styles.card_flex} >  
                    <Image source={require('../assets/img/book2.jpg')} style={styles.book1} />
                    <View style={styles.texts}>
                    <Text style={styles.title}>  
                    L'ENFANT NOIR
                    </Text>  
                    <Text style={styles.author}>  
                   CAMARA Laye
                    </Text> 
                    <Text style={styles.text_wrap}>  
                   Un Livre d'amour et de Paix
                    </Text>  
                     </View>
                    
            </View>  
        </View>  
        
        </View>

 {/* ///////////////////DEUXIME LIVRE////////////////// */}
        <View style={styles.single_card}>
        <View style={[styles.card, styles.elevation]}>  
            <View style={styles.card_flex} >  
                    <Image source={require('../assets/img/impatientes.jpg')} style={styles.book1} />
                    <View style={styles.texts}>
                    <Text style={styles.title}>  
                    Les Impatientes
                    </Text>  
                    <Text style={styles.author}>  
                    Djaïli Amadou Amal
                    </Text> 
                    <Text style={styles.text_wrap}>  
                    Trois femmes, trois histoires
                    </Text>  
                    </View>
                    
            </View>  
        </View>  
        
        </View>
{/* ///////////////////TROISIEME LIVRE////////////////// */}
<View style={styles.single_card}>
        <View style={[styles.card, styles.elevation]}>  
            <View style={styles.card_flex} >  
                    <Image source={require('../assets/img/sahel.jpg')} style={styles.book1} />
                    <View style={styles.texts}>
                    <Text style={styles.title}>  
                    Cœur du Sahel
                    </Text>  
                    <Text style={styles.author}>  
                    Djaïli Amadou Amal
                    </Text> 
                    <Text style={styles.text_wrap}>  
                    les jeunes filles luttent pour vivre.
                    </Text>  
                    </View>
                    
            </View>  
        </View>  
        
        </View>
{/* ///////////////////QUATRIEME LIVRE////////////////// */}
<View style={styles.single_card}>
        <View style={[styles.card, styles.elevation]}>  
            <View style={styles.card_flex} >  
                    <Image source={require('../assets/img/petitjo.jpg')} style={styles.book1} />
                    <View style={styles.texts}>
                    <Text style={styles.title}>  
                    Petit Jo  
                    </Text>  
                    <Text style={styles.author}>  
                    Évelyne Mpoudi Ngolé
                    </Text> 
                    <Text style={styles.text_wrap}>  
                    Petit Jo lutte contre la fatalité 
                    </Text>  
                    </View>
                    
            </View>  
        </View>  
        
</View>

{/************************************** FOOTER ******************************* */}
    <View style={styles.footer} >
        <Text style={styles.text_footer}>Contact</Text>
        <Text style={styles.text_footer}>A propos </Text>
        <Text style={styles.text_footer}>PANIER </Text>
        <View style={styles.icons}>
            <Icon name="facebook" size={30} color="black" style={styles.social_icon_footer}/>
            <Icon name="twitter" size={30} color="black" style={styles.social_icon_footer}/>
            <Icon name="google" size={30} color="black" style={styles.social_icon_footer}/>

        </View>
    </View>

    </ScrollView>
  )
}

export default HomePage



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
        bottom: 14,
        
    },
    social_icon : {
      paddingLeft: 30
    },
    icon1 : {
        position: 'relative',
        left: 350,
        bottom: 45
    },
    textNav: {
        fontWeight: 'bold',
        color: '#CFB53B',
        fontSize: 30,
        textAlign: 'left',
        margin: 30,
        textAlign: 'center'
    },
    image : {
        position: 'relative',
        left: 0,
        width:'100%',

    },
    textQuiz : {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        margin: 30,
        textAlign: 'center'
    },
    imgQuiz : {
        position: 'relative',
        bottom: 10,
        marginLeft: 15,
        marginRight: 4,
        backgroundColor: 'rgb(228, 228, 288)',
        width: 100,
        height: 100,
        borderColor: 'grey',
        borderRadius: 100,
         
    },
    imgQuiz1 : {
        position: 'relative',
        right:5,
        marginLeft: 15,
        marginRight: 4,
        bottom: 10,
        backgroundColor: 'rgb(228, 228, 288)',
        width: 100,
        height: 100,
        borderColor: 'grey',
        borderRadius: 100,
         
    },
    ViewQuiz : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#52006A',  
        elevation: 20,  
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
      social_icon_footer : {
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
})