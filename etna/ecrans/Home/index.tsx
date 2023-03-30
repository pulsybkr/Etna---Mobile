import { View, Text, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react';
import './style.tsx';
import Styles from './style';
import { FakeActivity } from './../../Data/fakeActivity';
// import { fakeEtudiant } from '../../Data/fakeEtudiant';
import axios from 'axios';
import BottonTabs from '../tabs';

const Admin = ({ navigation }) => {
  const [datas, setDatas] = useState([]);
  // const [login, setLogin] = useState("");


  const goTo = (login: any) =>
    navigation.navigate("History", {
      id: login,
    });

  const getData = async ()=>{
    axios.get(`http://172.16.31.3:3000/api/students/`)
      .then(function (response) {
         const status = response.status
         const data = response.data

        
         if(status == 200){
         console.log(data.listing)
          setDatas(data.listing)

         }else{
          console.log(data)
         }
  
      })
      .catch(function (error) {
          console.log(error);
      })
  }  
  useEffect(() => {
      getData()
    }, []);

  return (
    <View>
      <ScrollView>

  {/* profile */}
  <View style={Styles.header}>
    <Text style={Styles.userName}>Administration</Text>
    <Image source={require('../../assets/profile.png')} style={Styles.userImg} />
  </View>

  {/* Liste des activités */}
  <FlatList style={Styles.scrollableList} data={FakeActivity} keyExtractor={item => item.id} horizontal={true}
  showsHorizontalScrollIndicator={false}
  renderItem={({item}) => {
    return (
      <TouchableOpacity style={Styles.scrollableListItem}>
      <Text style={Styles.mainText}>{item.mainText}</Text>
      <Text style={Styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
    );
  }} />
  
  {/* LISTE DES ETUDIANST */}
  <View style={Styles.title_etudiant}>
    <Text style={Styles.title_etudiants}>Etudiant</Text>
    {/* <TouchableOpacity>
      <Text style={Styles.title_afficher}>Afficher tout</Text>
    </TouchableOpacity> */}
  </View>

  <View style={Styles.etudiantContainer}>
    {
      datas.map((data, index) => {
        return (
          <TouchableOpacity onPress={()=>{goTo(data.fullName)}} key={data.fullName} style={Styles.etudiant} >
            {/* icons etidiants */}
              {/* <Image source={{ uri: `${etudiant.img}` }} style={Styles.etudiantImg}/> */}

            {/* Nom et prenom etudiant */}
              <View style={Styles.listeEtudiant}>
                <Text style={Styles.etudiantName}>{data.id}</Text>
                {/* <Text style={Styles.etudiantAffiche}>{data.fullName}</Text> */}
              </View>
            
        </TouchableOpacity>
        )
    })}
  </View>

  </ScrollView>

{/* <BottonTabs/> */}
    </View>
  )
}

export default Admin;