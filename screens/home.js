// import * as React from 'react';
import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

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
      alignContent: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif'
    },
    inner:{
      alignItems: 'center',
      padding: 24,
      width: '85%',
      height: '92%',
      backgroundColor: 'rgba(255, 255, 255, .0)',
    },
    image:{
      width: '60%',
      height: '50%',
      borderRadius: 13
    },
    text:{
      textAlign: 'justify',
      fontSize: 17,
      alignItems: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif',
      lineHeight: 25,
    }
  }); 

class Home extends Component {
    render(){ 
          return (
              <ImageBackground style={styles.container}>
                    <View style = {styles.inner}>
                    <Text style={styles.title}> Aquaponics </Text>
                      <Image style={styles.image}
                        source = {require('../img/prototype.png')}></Image>
                         
                          <Text style={styles.text} > The Smart Aquaponics is a self-sustaining systems in which both of the crops and fishes receives equal nutrients. In this prototype, it will showcase the control of temperature for the off-season crop like Tomato. </Text>
                      </View>
              </ImageBackground>
          );

    }
}

export default Home;