import React, { Component, useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import {  StyleSheet, Text, ScrollView, View, Switch,Image, } from "react-native";
import Slider from '@react-native-community/slider';
import * as firebase from 'firebase';


class Screen1 extends Component {

 

//switch1
  toggleSwitch = (value) => {
    if (value == true){
     
      firebase.database()
        .ref('/Control')
        .update({
          light: "1",
        })
        .then(() => console.log('Data set.'));
  }
  else if (value == false){
    firebase.database()
        .ref('/Control')
        .update({
          light: "0"
          })
        .then(() => console.log('Data set.'));
  }
    this.setState({toggled: value})
    this.setState(previousState => !previousState);
   
  }

//switch 2
  toggledSwitch = (value) => {
    if (value == true){
     
      firebase.database()
        .ref('/Control')
        .update({
          pump: "1"
          })
        .then(() => console.log('Data set.'));
  }
   if (value == false){
    firebase.database()
        .ref('/Control')
        .update({
          pump: "0"
          })
        .then(() => console.log('Data set.'));
  }
    this.setState({toggle: value})
    this.setState(previousState => !previousState);
  }

  //alert
buttonClickListener = () => {
  alert("The fish has been fed");
};

buttonClickListener2 = () => {
  alert("Done")
}


sliderValue = (value) => {
  firebase.database()
  .ref('/Control')
  .update({
      fan: value,
  })
  this.setState({sliderValue: value})

}


  constructor(props) {
      super(props);
      this.state = {
        sliderValue: '',
        toggle: false,
        toggled: false,
      }
    }

    //  async componentDidMount(){
    //   firebase.database().ref("Control").on("value", o => {
    //       if (o.val()){
    //         this.setState({sliderValue:(o.val())})
    //         //console.log(o.val())
    //       }
         
    //       })
    //     }
        
    render(){ 
      //console.log(this.state.sliderValue)
      // const {fan} = this.state.sliderValue || {}
      // console.log(fan)
      return (
            
            <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
             
             <View style={styles.box}>
               <View style = {styles.inner}>
                 <Text style = {styles.text1}> Fish Feeder </Text>
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
             
            {/* Switch 1 */}
             <View style={styles.box}>
             <View style = {styles.inner}>
             <Text style = {styles.text1}> Sprinkler </Text>
             <Image style={styles.image}
                        source = {require('../img/waterplants.png')}></Image>
              <View style={[{ width: 100 , margin: 40, backgroundColor: "rgb(63, 112, 177)" }]}>
                <Button 
                  onPress={this.buttonClickListener2}
                  title="Water"
                  color="rgb(63, 112, 177)"
                />
               </View>
            </View>
             </View>

            {/* Slider */}
             <View style={styles.box}>
             <View style = {styles.inner}>
             <Text style = {styles.text1}> Fan </Text>
             <Image style={styles.image}
                        source = {require('../img/fan.png')}></Image>
               <Slider style = {styles.slider}
                  minimumValue={0}
                  maximumValue={1000}
                  minimumTrackTintColor="#6291BF"
                  maximumTrackTintColor= "#6291BF"
                  thumbTintColor = "rgb(63, 112, 177)"
                  step={100}
                  onValueChange={this.sliderValue}
                  //value={this.state.sliderValue}
                />
                <Text style = {{ paddingTop: 12, alignContent: 'center', color: "rgb(63, 112, 177)"}}>
                     {this.state.sliderValue}
                  </Text>
               </View>
             </View>


             <View style={styles.box}>
             <View style ={styles.inner}>
                 <Text style = {styles.text1}> Light </Text>
             <Image style={styles.image}
                        source = {require('../img/lights.png')}></Image>  
                <Switch style = {styles.switch}
                      trackColor={{ false: "#767577", true:  "#6291BF" }}
                      thumbColor={this.toggleSwitch ? "rgb(63, 112, 177)" : "#fffff"}
                      onValueChange = {this.toggleSwitch}
                      value = {this.state.toggled}>
                  </Switch>
                  <Text style = {{ paddingBottom: 12, alignContent: 'center', color: "rgb(63, 112, 177)"}}> {this.state.toggled ? 'ON' : 'OFF'}</Text>
               
               {/* <Switch style = {styles.switch}
                      duration = {200}
                      trackColor={{ false: "#767577", true:  "#6291BF" }}
                      thumbColor={this.toggledSwitch ? "rgb(63, 112, 177)" : "#fffff"}
                      onValueChange = {this.toggledSwitch}
                      value = {this.state.toggle}
                    >
                        
                  </Switch> 
                  <Text style = {{ paddingBottom: 40, 
                                    alignContent: 'center', 
                                    color: "rgb(63, 112, 177)"}}> 
                                {this.state.toggle ? 'ON' : 'OFF'}</Text> */}
               
               </View>
               </View>
             </ScrollView>
             </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({

  contentContainer: { 
      justifyContent: "center",
      flexWrap:"wrap",
      flexDirection:"row",
      backgroundColor: "rgb(208,220,224)",
      alignItems: 'center',
      width: '100%'
  },
    box: {
      width: 175,
      height: 340,
      padding: 10,
  },
  inner:{
      backgroundColor: 'rgb(185, 198, 210)',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      borderRadius: 10,
  },
  scrollView: {
  },
  container:{
    flex: 1
  },
  switch : {
      marginTop: 26,
      alignItems: 'center',
  },
  text1:{
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'serif',
    color: "#4472ca",
    fontWeight: "bold",
  },
  image:{
    width: 90,
    height: 90,
    marginTop: 40,
  },
  slider:{
    width: 130,
    height: 10,
    marginTop: 40,
  },
  
}
);

export default Screen1;