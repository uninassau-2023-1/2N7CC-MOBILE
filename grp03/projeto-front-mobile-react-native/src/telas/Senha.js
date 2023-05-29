import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator
  } from 'react-native';

import React, { useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { Feather, MaterialIcons, Entypo  } from "@expo/vector-icons"
import SelectComponent from '../components/select';

import { io } from 'socket.io-client'

export default function Senha(){
    const [senhas, setSenhas] = useState('');
    const [selectVal, setSelectVal] = useState('');
    const [socket, setSocket] = useState(null);


    useEffect(() => {
        const socket = io('http://192.168.156.222:3001')
        setSocket(socket)
        socket.on('connect', () => {
            console.log('conectado')
            Alert.alert('conectado')
        })
    
        socket.on('disconnect', () => {
          console.log('disconnected')
        })

    
        socket.on('cardRender', async (msg)=>{
            
        })
    
        return () => {
          socket.disconnect()
        }
      }, [])


      function gerarSenha(){
        const config = {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY4NTI5NTM2OCwiZXhwIjoxNjg3ODg3MzY4fQ.hB7oC1fWOQoHm7bepxBeFJSW6J-kVdou6chucdaOlxc` }
        };
    
        axios.post('http://192.168.156.222:4000/senha', {tipo_atendimento: selectVal}, config)
            .then((val) => {
                setSenhas(val.data.senha)
                socket.emit('cardRender', val.data.senha+'celular')
            })
            .catch((error) => console.log(error));
      }


      return (<>
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>{senhas}</Text>
        <SelectComponent onChange={setSelectVal}/>
        <TouchableOpacity onPress={()=>{gerarSenha()}} style={styles.radiusIcone}>
          <Entypo name="cycle" size={30} color="#fff"/>
        </TouchableOpacity>
      </View>
      </>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radiusIcone:{
        backgroundColor: '#77b885',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
      }
  });