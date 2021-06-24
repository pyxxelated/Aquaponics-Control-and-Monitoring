import React, { Component, useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import {  StyleSheet, Text, ScrollView, View, Switch,Image, Pressable } from "react-native";
import Slider from '@react-native-community/slider';
import * as firebase from 'firebase';


class Screen1 extends Component {

 

//switch1
  toggleSwitch = (value) => {
    firebase.database()
      .ref('/Control')
      .update({
          light: value,
      })
  //   if (value == true){
     
  //     firebase.database()
  //       .ref('/Control')
  //       .update({
  //         light: "1",
  //       })
  // }
  // else if (value == false){
  //   firebase.database()
  //       .ref('/Control')
  //       .update({
  //         light: "0"
  //         })
  
    this.setState({toggled: value})
    //this.setState(previousState => !previousState);
   
  }

//switch 2
  toggledSwitch = (value) => {
    firebase.database()
      .ref('/Control')
      .update({
          pump: value,
      })
  //this.setState({sliderValue: value})
  //   if (value == true){
     
  //     firebase.database()
  //       .ref('/Control')
  //       .update({
  //         pump: "1"
  //         })
  //       .then(() => console.log('Data set.'));
  // }
  //  if (value == false){
  //   firebase.database()
  //       .ref('/Control')
  //       .update({
  //         pump: "0"
  //         })
  //       .then(() => console.log('Data set.'));
  // }
    this.setState({toggle: value})
    //this.setState(previousState => !previousState);
  }

  //alert
buttonClickListener = () => {
  firebase.database()
      .ref('/Control')
      .update({
          feed: "1",
      })
      .then(() => console.log('Pressed.'));
  alert("The fish has been fed");
};

onPressFunction = () => {
  setTimeout(function () {
  

  }, 5000);
  firebase.database()
  .ref('/Control')
  .update({
      feedfish: "1",
  })
  console.log('Pressable Clicked !!!');
  this.setState({pressed: true})
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
        toggle: '',
        toggled: '',
        data: '',
      }
    }
    async componentDidMount(){
      firebase.database().ref("Control").on("value", o => {
          if (o.val()){
            this.setState({data:(o.val())})
          }
         
          })
          }
        
    render(){ 
      console.log(this.state.data)
      const {pump, light, fan} = this.state.data || {}
      console.log(pump,light, fan) 
      return (
            
            <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
             
             <View style={styles.box}>
               <View style = {styles.inner}>
                 <Text style = {styles.text1}> Fish Feeder </Text>
               <Image style={styles.image}
                      source = {require('../img/pet-feeder.png')}></Image>
                {/* <View style={[{ width: 90 , margin: 24, backgroundColor: "rgb(63, 112, 177)" }]}> */}
                <Pressable onPress={this.onPressFunction}
                           unstable_pressDelay = {1000}
                           style={({ pressed }) => [{backgroundColor: pressed ? '#4E79B2' : 'rgb(63, 112, 177)',
                                                    borderRadius: 5,}, styles.button]}>
                             <Text style={styles.text2}>{this.state.pressed ? 'Pressed!' : 'Press Me'}</Text> 
                           
                 </Pressable>
                {/* <Button
                  onPress={this.buttonClickListener}
                  title="Feed"
                  color="rgb(63, 112, 177)"
                /> */}
              </View>
               </View>
             {/* </View> */}
             
            {/* Switch 2 */}
             <View style={styles.box}>
             <View style = {styles.inner}>
             <Text style = {styles.text1}> Sprinkler </Text>
             <Image style={styles.image}
                        source = {require('../img/waterplants.png')}></Image>
              <Switch style = {styles.switch}
                      trackColor={{ false: "#767577", true:  "#6291BF" }}
                      thumbColor={this.toggledSwitch ? "rgb(63, 112, 177)" : "#fffff"}
                      onValueChange = {this.toggledSwitch}
                      disabled = {true}
                      value = {pump}>
                  </Switch>
                  <Text style = {{ paddingBottom: 12, alignContent: 'center', color: "rgb(63, 112, 177)"}}> {pump ? 'ON' : 'OFF'}</Text>
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
                  value={fan}
                />
                <Text style = {{ paddingTop: 12, alignContent: 'center', color: "rgb(63, 112, 177)"}}>
                     {fan}
                  </Text>
               </View>
             </View>

            {/* switch1 */}
             <View style={styles.box}>
             <View style ={styles.inner}>
                 <Text style = {styles.text1}> Light </Text>
             <Image style={styles.image}
                        source = {require('../img/lights.png')}></Image>  
                <Switch style = {styles.switch}
                      trackColor={{ false: "#767577", true:  "#6291BF" }}
                      thumbColor={this.toggleSwitch ? "rgb(63, 112, 177)" : "#fffff"}
                      onValueChange = {this.toggleSwitch}
                      value = {light}>
                  </Switch>
                  <Text style = {{ paddingBottom: 12, alignContent: 'center', color: "rgb(63, 112, 177)"}}> {light ? 'ON' : 'OFF'}</Text>
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
      width: '100%',
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
  button:{
    width: 100 ,
    margin: 26,
    height: 30,
  },
  text2:{
    textAlign: 'center',
    fontSize: 15,
    alignItems: 'center',
    color: "rgb(185, 198, 210)",
    fontFamily: 'serif',
    lineHeight: 25,
  },
}
);

export default Screen1;