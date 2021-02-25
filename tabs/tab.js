import React from  'react';
import {View, Text, StyleSheet} from 'react-native';
//import firebase from '@react-native-firebase/app';
//import database from '@react-native-firebase/database';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    }
  }); 

  Tab1 = () =>
  <View style ={styles.container}>
      <Text style={styles.title}>RealTime Data</Text>
  </View>

  export default Tab1;