import {React, useState} from 'react'
import { View, Text, Image, StyleSheet,ScrollView, SafeAreaView, TextInput, Button } from 'react-native'
import { BottomSheet, ListItem  } from '@rneui/themed';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { storeBooks } from '../src/slices/books.slice';



const schema = yup
  .object()
  .shape({
   Lien: yup.string().required(),
   nom: yup.string().required(),
   auteur: yup.string().required(),
   description: yup.string(),
   qty: yup.number(),
   resume: yup.string(),
   price: yup.string(),
   

   
  })


function Form({navigation}) {
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
    dispatch(storeBooks(data))
    .unwrap() // permet d'extraire la réponse de l'asyncthunk une fois la promesse résolue
    .then(rep => {
      navigation.navigate('AdminNav');
      console.log(rep);
    })
    .catch ((err) => console.log(err));
    
};


  return (
    <ScrollView style={styles.background}>
<View>
  
      <View>
        <Image source={require('../assets/img/add_book2.png')} style= {styles.image} />
      </View>
      
      <View style={styles.form}>
        <Image source={require('../assets/img/istockphoto-941224020-612x612-removebg-preview.png')} style= {styles.image_form} />
        <SafeAreaView>
  
          <Controller
          control={control}
          name='Lien'
          render={({field: {onChange, value}}) => (
          <TextInput
          style={styles.input}
          placeholder="Lien du livre"
          onChangeText={value =>onChange(value)}
          value={value}
          />
          )}
          /> 

        <Controller
          control={control}
          name='price'
          render={({field: {onChange, value}}) => (
          <TextInput
          style={styles.input}
          placeholder="Prix du Livre"
          keyboardType='numeric'
          onChangeText={value => onChange(value)}
          value={value}
          />
          )}
        />

          <Controller
          control={control}
          name='nom'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Nom du livre"
            onChangeText={value =>onChange(value)}
            value={value}
          />
          )}
          /> 

        <Controller
          control={control}
          name='auteur'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Auteur"
            onChangeText={value =>onChange(value)}
            value={value}
          />
          )}
        /> 

        <Controller
          control={control}
          name='description'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Description"
            onChangeText={value =>onChange(value)}
            value={value}
          />
          )}
        /> 

        <Controller
          control={control}
          name='qty'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Nombre d'exemplaires"
            keyboardType='numeric'
            onChangeText={value =>onChange(value)}
            value={value}
          />
          )}
        /> 

        <Controller
          control={control}
          name='resume'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.textArea}
            placeholder="Résumé"
            multiline = {true}
            numberOfLines = {10}
            onChangeText={value =>onChange(value)}
            value={value}
          />
          )}
        /> 
         
        <View style={styles.button}>
            <Button
              title="REGISTER"
              disabled = {!formState.isValid}
              color="#000000c0"
              onPress={handleSubmit(data => {
                console.log("data",data)
                onSubmit(data);
              })}
            />
        </View>
       
        </SafeAreaView>
      </View>
      
    </View>
    </ScrollView>
    
   
  )
}

export default Form


const styles =StyleSheet.create({
  form : {
        backgroundColor: "#000000c0", 
        textAlign: 'center',
        fontFamily: 'DancingScript',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 80,
        marginLeft: 9,
        marginRight: 9,
        borderRadius: 30,
        height: 770
      },
  image_form: {
        width: 100,
        height: 80,
        position: 'relative',
        bottom: 50,
        left: 150
     },
  image: {
      textAlign: 'center',
      position: 'relative',
      left: 70,
      width: 250,
      height: 200
     },
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      borderRadius: 10,
      color: 'white',
      justifyContent: 'center',
      fontSize: 22,
    },
  textArea : {
    margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      borderRadius: 10
    },
    button : {
      width: 170,
      position: 'relative',
      left: 99,
      top: 10,
    },
    button_bottom_sheet : {
      marginRight: 13,
      marginLeft: 13,
      position: 'relative',
      bottom: 15,
    },
    background : {
      flex: 1,
      backgroundColor: "#ADD8E6"
    }
})