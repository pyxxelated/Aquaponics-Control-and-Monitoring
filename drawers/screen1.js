import React, { Component, useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import {  StyleSheet, Text, ScrollView, View, Alert, Switch,Image, } from "react-native";


const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    fontSize: 17,
    alignContent: 'center',
    fontFamily: 'serif',
    color: "rgb(63, 112, 177)",
    paddingBottom: 20
  },
  contentContainer: {
    padding: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "rgb(208,220,224)",
  },
  box: {
    width: 165,
    height: 245,
    padding: 10,
  },
  inner:{
    backgroundColor: 'rgb(185, 198, 210)',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 10,
    paddingTop: 30
  },
  scrollView: {
  },
  container:{
   flex: 1
  },
  switch : {
      // paddingTop : 10,
      // paddingLeft : 68,
      // paddingBottom : 20,
      // alignItems: "center",
      // justifyContent: "center"

      margin: 43
  },
  text1:{
    textAlign: 'center',
    fontSize: 17,
    alignContent: 'center',
    fontFamily: 'serif',
    color: "rgb(63, 112, 177)",
  },
  image:{
    width: 90,
    height: 90,
    borderRadius: 13,
  },
});


class Screen1 extends Component {
  state ={
    toggled: true,
    toggle: true
  }
  toggleSwitch = (value) => {
    this.setState({toggled: value})
  }
  toggledSwitch = (value) => {
    this.setState({toggle: value})
  }
  
buttonClickListener = () => {
  alert("Clicked On Button !!!");
};
//   constructor () {
//     super();

//     this.state = {
//       activeSwitch: 1,
//       useNativeDriver: true,
//     };
// }



    render(){ 
     
     
      
          return (
            
            <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* <View style = {styles.switch}>
              <View style={styles.switch}>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View> */}
             <View style={styles.box}>
               <View style = {styles.inner}>
               <Image style={styles.image}
                      source = {require('../img/pet-feeder.png')}></Image>
                <View style={[{ width: 90 , margin: 40, backgroundColor: "rgb(63, 112, 177)" }]}>
                <Button
                  onPress={this.buttonClickListener}
                  title="Feed"
                  color="rgb(63, 112, 177)"
                />
              </View>
               </View>
             </View>
             <View style={styles.box}>
             <View style = {styles.inner}>
             <Image style={styles.image}
                        source = {require('../img/lights.png')}></Image>
                <Switch style = {styles.switch}
                      onValueChange = {this.toggleSwitch}
                      value = {this.state.toggled}>
                  </Switch>
               </View>
             </View>
             <View style={styles.box}>
             <View style = {styles.inner}>
             <Image style={styles.image}
                        source = {require('../img/fan.png')}></Image>
               </View>
              
             </View>
             <View style={styles.box}>
             <View style = {styles.inner}>
             <Image style={styles.image}
                        source = {require('../img/pump.png')}></Image>
               <Switch style = {styles.switch}
                      onValueChange = {this.toggledSwitch}
                      value = {this.state.toggle}>
                  </Switch> 
               </View>
               </View>
             </ScrollView>
             </SafeAreaView>
          );
    }
}

export default Screen1;