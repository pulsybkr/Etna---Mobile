import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'
import Admin from "../../ecrans/Home";
import Layouts from "../Layouts";

const SignUp = ({ navigation }) => {
    const goBack = () => navigation.goBack();
    
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');


    const [password, setPassword] = useState("")


    const postData = async () => {
        try {
          const response = await axios.post('http://172.16.31.3:3000/api/login/login', 
          { email : email,
          password : password });

        //   console.log("ça marche mon vieux", response.data, response.status);
            const data = response.data
          if(response.status == 200){
            navigation.navigate("Admin")
          console.log("ça marche mon vieux", response.data, response.status);

          }else{
            setError(data.message)
            console.log(data)
          }
      
        } catch (error) {
          console.error(error);
        }
      };

      const connect = ()=>{
        postData()
      }
    return (
        <View style={style.root}>
            {/* titre */}
            <View>
                <Text style={style.title}>COMPTE ADMIN</Text>
                <Text style={style.title_colored}>Saisissez vos identifiants</Text>
            </View>

            {/* formulaire */}
            <View style={style.input_group}>
                <Text style={style.text}>Email</Text>
                <View style={style.input_container}> 
                    <TextInput secureTextEntry={false} onChangeText={(value) => {setEmail(value)}} placeholder="Votre mail"/>
                </View>
                <Text style={style.text}>Password</Text>
                <View style={style.input_container}> 
                    <TextInput secureTextEntry={true} onChangeText={(value) => {setPassword(value)}} placeholder="Votre mot de passe"/>
                </View>
            </View>
            <Text style={style.error}>{error}</Text>

            {/* bouton */}
            <TouchableOpacity style={style.button}>
                <Text onPress={connect} style={style.button_text}>Me connecter</Text>
            </TouchableOpacity>
            <Button onPress={goBack} title={`Go back`} />
        </View>
    );
};

export default SignUp;

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal: Layouts.paddingHorizontal,
        paddingVertical: Layouts.paddingVertical,
        backgroundColor: Layouts.bgColor,
    },

    input_container: {
        borderWidth: 1,
        borderColor: Layouts.primary,
        borderRadius:12,
        marginTop:10,
        marginBottom:10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff'
    },

    input: {
        padding:10,
    },

    text: {
        fontSize:16,
    },
    error: {
        fontSize:16,
        color: "red",
        textAlign: "center",
    },

    button: {
        backgroundColor: Layouts.primary,
        padding:10,
        border:5,
        borderRadius:12,
        marginTop: 12
    },

    button_text: {
        textAlign:'center',
        color: '#fff',
    },

    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },

    title_colored: {
        color: Layouts.primary,
        textAlign: 'center',
        marginBottom: 45,
    }, 

    input_group: {
        marginBottom: 14,
    }
})