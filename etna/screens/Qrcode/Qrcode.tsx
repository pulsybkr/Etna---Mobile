import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Controller, useForm } from "react-hook-form";
import { fecthStudentbyID, updateStudent } from '../../services/student';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';

const MySwal = withReactContent(Swal)



export default function Qrcode({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: ''
    }
  });
  const onSubmit = data => console.log(data.firstName);

const [hasPermission, setHasPermission] = useState<boolean | null>(null);
const [scanned, setScanned] = useState<boolean>(false);

const goBack = () => navigation.goBack();

const getData = async (login: string)=>{
  axios.get(`http://172.16.31.3:3000/api/students/${login}`
)
    .then(function (response) {
       const status = response.status
      
       if(status == 200){
        const data = response.data
        const studentId =  data.studentId
        const name = data.fullName
        postData(studentId, name)
       }else{
        createAlert(login)
       }

    })
    .catch(function (error) {
        console.log(error);
    })
}

const postData = async (student: any, name: string) => {
  try {
    const response = await axios.post('http://172.16.31.3:3000/api/presences/', 
    { studentId: student,
    present: true,
    date: "2023-02-28" });
    console.log("ça marche mon vieux", response.data);
    createTwoButtonAlert(name)

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
const getBarCodeScannerPermissions = async () => {
const { status } = await BarCodeScanner.requestPermissionsAsync();
setHasPermission(status === 'granted');
};

getBarCodeScannerPermissions();

}, []);

const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {

  if(type !== 'org.iso.QRCode'){
    alert(`reesayer`);
    setScanned(true)
    console.log("vous avez scanner le mauvais qrcode")
  }else{

    const datas = data.split("|")
    const login = datas[0]

   getData(login);

    setScanned(true);
  }

};

const createAlert = (login: any) =>
Alert.alert('Erreur :(', `vous n'êtes pas reconnu ${login}`, [
  {
    text: 'Reessayé',
    onPress: () => setScanned(true)
    ,
    style: 'cancel',
  }
]);

const createTwoButtonAlert = (id) =>
Alert.alert('Emargement réussi', `${id}`, [
  {
    text: 'Sortir',
    onPress: () => goBack()
    ,
    style: 'cancel',
  }
]);

// permission pour acceder à la camera
if (hasPermission === null) {
  return <Text>Autorisez l'accès à la camera</Text>;
}
if (hasPermission === false) {
  return <Text>Pas d'accès à la camera</Text>;
}

return (
<View style={styles.container}>
  <View style={styles.border}>
    <BarCodeScanner
    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    style={{height: 400, width: 400}}/>

    <Button onPress={goBack} title={`Go back`} />
  </View>

  <Text style={styles.titleTexte}>{}</Text>

  {scanned && 
<KeyboardAvoidingView style={{ flex: 1, padding: 16 }} behavior="padding">
    <Button title={'Scanner à nouveau'} onPress={() => setScanned(false)} color='black' />
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            // style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
</KeyboardAvoidingView>
  }

<Button onPress={goBack} title={`Go back`} />

</View>
);
}

const styles = StyleSheet.create({
container: {
backgroundColor: '#F5FCFF',
alignItems: 'center',
justifyContent:'center',
flex: 1,
},

border:{
 overflow: 'hidden',
 borderRadius: 30,
 height: 300,
 width:300,
 alignItems: 'center',
 justifyContent:'center',
},

titleTexte: {
  fontSize: 16,
  margin: 20,
},

scan: {

}

});

