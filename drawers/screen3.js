import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(208,220,224)",
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif'
    }
  }); 

class Screen3 extends Component {
    render(){ 
          return (
            <View style={styles.container}>
                <Text style={styles.title} >  hello </Text>
            </View>
          );
    }
 }



export default Screen3;