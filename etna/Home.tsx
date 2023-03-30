import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import styles from "./screens/styles";

export default function Home({ navigation }) {

  return (
    <View style={styles.view}>
     <Image source={require('./assets/logo.png')} style={styles.logo}/>

      <View style={styles.contenairButton}>
        <Image source={require('./assets/qr.png')} style={styles.logoButton}/>
        <Text onPress={() => navigation.navigate("Qrcode")} style={styles.button}>
          Emargement
        </Text>
      </View>

      <View style={styles.contenairButton}>
        <Image source={require('./assets/login.png')} style={styles.logoButton}/>
        <Text onPress={() => navigation.navigate("SignUp")} style={styles.button}>
        Se connecter comme Admin
        </Text>
      </View>
          
    </View>
  );
}

