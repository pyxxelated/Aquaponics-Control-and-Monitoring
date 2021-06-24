import React, {Component} from 'react';
import { SafeAreaView } from "react-native";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
      
    },
    contentContainer: {
      flexWrap:"wrap",
      justifyContent: "center",
      padding: 20,
      backgroundColor: "rgb(208,220,224)",
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      paddingTop: 15,
      fontWeight: 'bold',
      alignContent: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif'
    },
    inner:{
        backgroundColor: 'rgb(185, 198, 210)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 10,
    },
    scrollView: {
    },
    image:{
      width: 100,
      height: 100,
      borderRadius: 13
    },
    text:{
      textAlign: 'center',
      fontSize: 18,
      paddingTop: 10,
      alignItems: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif',
      lineHeight: 25,
    },
    text1:{
      textAlign: 'center',
      fontSize: 18,
      alignItems: 'center',
      color: "rgb(63, 112, 177)",
      fontFamily: 'serif',
      lineHeight: 25,
    },
    box:{
      padding: 20,
      width: '100%',
      alignItems: 'center'
    },
  }); 

class Screen3 extends Component {
    render(){ 
          return (
            
            <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
             
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                      <Image style={styles.image}
                             source = {require('../img/map.png')}></Image>
                       <Text style={styles.title}> Address </Text>
                      <Text style={styles.text} > 1800 Villa Barbara St. Pasay City </Text>
                      </View>
                    </View>

                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <Image style={styles.image}
                             source = {require('../img/phone.png')}></Image>
                       <Text style={styles.title}> Phone </Text>
                      <Text style={styles.text}> 09083881689 </Text>
                      <Text style={styles.text1}> 582-0759</Text>
                    </View>
                    </View>      
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <Image style={styles.image}
                             source = {require('../img/email.png')}></Image>
                       <Text style={styles.title}> Email </Text>
                      <Text style={styles.text} >jpocubillo0798@gmail.com</Text>
                    </View>
                    </View>                        
              </ScrollView>
              </SafeAreaView>
             
          );

    }
}

export default Screen3;