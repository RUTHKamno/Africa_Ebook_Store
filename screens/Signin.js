import { React, useState } from 'react'
import { View, Image, StyleSheet, SafeAreaView, TextInput, Button, Text } from 'react-native'
import Admin from './Admin';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { storeUser } from '../src/slices/user_slice';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Login from './Login';


const schema = yup
  .object()
  .shape({
    nom: yup.string().required(),
    mail: yup.string().email().required(),
    prenom: yup.string().required(),
    password: yup.string()
   .required('Veuillez renseigner cette case.') 
   .min(8, 'Le mot de passe est trop court .')
   .matches(/[a-zA-Z]/, 'le mot de passe ne doit contenir que des lettres.')
  })
  .required();


function Signin({navigation}) {

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
    dispatch(storeUser(data))
    .unwrap() // permet d'extraire la réponse de l'asyncthunk une fois la promesse résolue
    .then(rep => {
      console.log(rep);
    });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.background}>
      <View>
        <Image source={require('../assets/img/register.png')} style= {styles.image} />
      </View>
      <View style={styles.form}>
        <Image source={require('../assets/img/people.png')} style= {styles.image_form} />
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
          name='mail'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={value =>onChange(value)}
            value={value}
            placeholder="Your Email"

          />
          )}
          />
 {errors.mail && <Text>Respecter la syntaxe des adresses.</Text>}
          <Controller
          control={control}
          name='prenom'
          render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={value =>onChange(value)}
            value={value}
            style={styles.input}
            placeholder="Your Username"
          />
          )}
          /> 
 {errors.prenom && <Text>Champ requis.</Text>}
          <Controller
          control={control}
          name='password'
          render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={value =>onChange(value)}
            value={value}
            style={styles.input}
            placeholder="Your Password"
          />
          )}
          /> 
{errors.password && <Text>Champ requis.</Text>}   
          <View style={styles.button}>
            <Button
               title="REGISTER"
                disabled = {!formState.isValid}
                color="#000000c0"
                onPress={handleSubmit(data => {
                console.log(data)
                onSubmit(data);
              })}
            />
          </View>
       
        </SafeAreaView>
      </View>
      
    </View>
   
  )
}

export default Signin


const styles =StyleSheet.create({
  form : {
        backgroundColor: "#000000c0", 
        textAlign: 'center',
        fontFamily: 'DancingScript',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 90,
        marginLeft: 9,
        marginRight: 9,
        borderRadius: 30,
        height: 400
      },
  image_form: {
        width: 80,
        height: 80,
        position: 'relative',
        bottom: 60,
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
      justifyContent: 'center',
      fontSize: 22,
      color: 'white',
    },
  button : {
      width: 170,
      position: 'relative',
      left: 99,
      top: 10
    },
  background : {
      flex: 1,
      backgroundColor: "#ADD8E6",
    }
})