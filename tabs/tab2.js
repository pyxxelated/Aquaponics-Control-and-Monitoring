import React from  'react';
import {View, Text,StyleSheet} from 'react-native';

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

  Tab2 = () =>
  <View style ={styles.container}>
      <Text style={styles.title}>Analytics</Text>
  </View>

  export default Tab1;