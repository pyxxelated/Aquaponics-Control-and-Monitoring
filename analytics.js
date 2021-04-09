import React, {Component} from 'react';
import {View, Text, StyleSheet,ImageBackground} from 'react-native';
//import ChartView from 'react-native-highcharts'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(208,220,224)",
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif'
    },
 
    text:{
      textAlign: 'center',
      fontSize: 17,
      alignContent: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif'
    }
  }); 

class analytics extends Component{ 
    render(){ 
        return (
          <View style={styles.container}>
              <Text style={styles.title} >  hello </Text>
          </View>
        );
  }
}

export default analytics;
