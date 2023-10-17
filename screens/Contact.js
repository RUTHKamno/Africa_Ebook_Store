import {React, useState} from 'react';
import { Text, ScrollView, View, StyleSheet,Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { storeContact } from '../src/slices/contact_slice';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';



const schema = yup
  .object()
  .shape({
    nom: yup.string().required(),
    email: yup.string().email().required('veuillez renseigner cette case'),
    commentaires: yup.string()
   .required('Veuillez renseigner cette case.') 
   .min(8, 'Votre commentaire est trop court .')
   .matches(/[a-zA-Z]/, 'les commentaires ne doivent contenir que des lettres.')
  })
  .required();



function Contact({navigation}) {
  const [text, onChangeText] = useState('Enter Something');
  const {
    control,
    setValue,
    handleSubmit,
    formState,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(storeContact(data))
    .unwrap() // permet d'extraire la réponse de l'asyncthunk une fois la promesse résolue
    .then(rep => {
      navigation.navigate('Home');
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
                        onPress={() => navigation.navigate('Home')}>
                         <Icon name="home" size={30} color="black" style={styles.icon1}/>
                </TouchableOpacity> 
            </View>
        </View>
        <View>
        <Image source={require('../assets/img/contact-removebg-preview.png')} style= {styles.image} />
        </View>
        <Text style={styles.panier}>Ecrivez-Nous !!</Text>

        <View style={styles.single_card}>
            <View style={[styles.card, styles.elevation]}>  
                <View style={styles.card_flex} >  
                    <View>
                    <Text style={styles.text}>  
                    <Icon name="phone-alt" size={30} color="black" style={[styles.icon, styles.social_icon]}/><>{"              "}</> +237 670 59 61 59
                    </Text>  
                    <Text style={styles.text}>  
                    <Icon name="mail-bulk" size={30} color="black" style={[styles.icon, styles.social_icon]}/><>{"              "}</> kamnokamcher@gmail.com
                    </Text> 
                    <Text style={styles.text}>  
                    <Icon name="home" size={30} color="black" style={[styles.icon, styles.social_icon]}/><>{"             "}</>  Yaoundé: Nkondengui 
                    </Text>  
                    </View>
                    
                </View>  
            </View>  
        </View>

        <Text style={styles.panier}>Discutons !!</Text>
        <View style={styles.form}>
        <SafeAreaView>
        <Controller
          control={control}
          name='nom'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={value =>onChange(value)}
            value={value}
            placeholder="Your Name"
          />
          )}
        /> 
        {errors.nom && <Text>C'est un champ obligatoire.</Text>}
          
        <Controller
          control={control}
          name='email'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={value =>onChange(value)}
            value={value}
            placeholder="Your Email"
          />
          )}
        /> 
          {errors.email && <Text>C'est un champ obligatoire.</Text>}
    
        <Controller
          control={control}
          name='commentaires'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.textArea}
            onChangeText={value =>onChange(value)}
            value={value}
            multiline = {true}
            numberOfLines = {10}
            placeholder="Commentaires ?"
          />
          )}
        /> 
          {errors.commentaires && <Text>C'est un champ obligatoire.</Text>}
         
          <View>
            <TouchableOpacity
              title="CONTACT"
              color="#000000c0"
              style={styles.button}
              onPress={handleSubmit(data => {
                console.log(data)
                onSubmit(data);
              })}
            ><Text style={styles.textSubmit}>ENVOYER</Text>
            </TouchableOpacity>
          </View>
       
        </SafeAreaView>
        </View>
    </ScrollView>
  )
}

export default Contact

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
panier: {
   fontWeight: 'bold',
   color: '#CFB53B',
   fontSize: 30,
   textAlign: 'left',
   margin: 30
},
image: {
  width: 300,
  height: 300,
  textAlign: 'center',
  position: 'relative',
  left: 34
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
text : {
  fontWeight: 'bold',
  fontSize: 15,
  textTransform: 'capitalize',
  paddingTop: 10,
},
form : {
  backgroundColor: "#000000c0", 
  textAlign: 'center',
  fontFamily: 'DancingScript',
  fontSize: 40,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 30,
  marginLeft: 9,
  marginRight: 9,
  borderRadius: 30,
  height: 420
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderColor: 'white',
  borderRadius: 10
},
button : {
  position: 'relative',
  left: 99,
  top: 5,
  width: 160,
  borderRadius: 10,
  backgroundColor: '#000000c0',
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  
},
textSubmit : {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
},
textArea : {
  margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 10
  },

})