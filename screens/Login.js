import {React, useState} from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import HomeNav from './HomeNav';
import Index from './Index';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUser } from '../src/slices/user_slice';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';


const schema = yup
  .object()
  .shape({
    nom: yup.string().required(),
    password: yup.string()
   .required('Veuillez renseigner cette case.') 
   .min(8, 'Le mot de passe est trop court .')
   .matches(/[a-zA-Z]/, 'le mot de passe ne doit contenir que des lettres.')
  })
  .required();


function Login({navigation}) {
  const [text, onChangeText] = useState('Enter Something');
  const {
    control,
    setValue,
    handleSubmit,
    formState,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const dispatch = useDispatch();

  const user = useSelector(state => state.currentUser);

  const onSubmit = data => {
    dispatch(fetchUser(data))
    .unwrap() // permet d'extraire la réponse de l'asyncthunk une fois la promesse résolue
    .then(rep => {

      navigation.navigate('HomePage');
      console.log(rep);
    })
    .catch ((err) => console.log(err));
    
  };


  return (
    <View style={styles.background}>
      <View>
        <Image source={require('../assets/img/login.png')} style= {styles.image} />
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
          name='password'
          render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={value =>onChange(value)}
            value={value}
            placeholder="Your Password"

          />
          )}
          />
          {errors.password && <Text>Veuillez Renseigner le bon mot de passe</Text>}

          <View style={styles.button}>
            <Button
              title="LOGIN"
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
   
  )
}

export default Login


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
        height: 300
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
      left: 70
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
      backgroundColor: "#D8BFD8"
    }
})