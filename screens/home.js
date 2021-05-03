// import * as React from 'react';
import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
      // backgroundColor: "rgb(208,220,224)",
      // alignItems: 'center',
      // justifyContent: 'center',
      
    },
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: "rgb(208,220,224)",
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      alignContent: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif'
    },
    inner:{
      // alignItems: 'center',
      // padding: 24,
      // width: '85%',
      // height: '92%',
      // backgroundColor: 'rgb(185, 198, 210)',
      // borderRadius: 10,
     
        backgroundColor: 'rgb(185, 198, 210)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '85%',
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 10,
    },
    scrollView: {
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
    },

    box:{
      padding: 10,
      width: '110%',
      alignItems: 'center'
    },
  }); 

class Home extends Component {
    render(){ 
          return (
            
            <View style = {styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
             
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    {/* <View style = {styles.inner}> */}
                      <Text style={styles.title}> Aquaponics </Text>
                      <Image style={styles.image}
                             source = {require('../img/prototype.png')}></Image>
                      <Text style={styles.text} > The Smart Aquaponics is a self-sustaining systems in which both of the crops and fishes receives equal nutrients. In this prototype, it will showcase the control of temperature for the off-season crop like Tomato. </Text>
                      </View>
                    </View>

                    {/* <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <Text style={styles.title}> Aquaponics </Text>
                    <Text style={styles.text} > The Smart Aquaponics is a self-sustaining systems in which both of the crops and fishes receives equal nutrients. In this prototype, it will showcase the control of temperature for the off-season crop like Tomato. </Text>
                   </View>
                    </View> */}
              </ScrollView>
              </View>
             
          );

    }
}

export default Home;