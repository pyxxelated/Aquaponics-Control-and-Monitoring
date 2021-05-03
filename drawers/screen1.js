import React, { Component, useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import {  StyleSheet, Text, ScrollView, View, Switch,Image, } from "react-native";
import Slider from '@react-native-community/slider';
import * as firebase from 'firebase';

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
      marginTop: 37,
      alignItems: 'center',
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
  slider:{
    width: 120,
    height: 10,
    marginTop: 40,
  },
  
});


class Screen1 extends Component {

  
  state ={
    toggled: false,
    toggle: false,
   
  }
//switch1
  toggleSwitch = (value) => {
    this.setState({toggled: value})
    this.setState(previousState => !previousState);
  }

//switch 2
  toggledSwitch = (value) => {
    this.setState({toggle: value})
    this.setState(previousState => !previousState);
  }
//alert
buttonClickListener = () => {
  alert("Done !!!");
};
  
//slider
  constructor(props) {
      super(props);
      this.state = {
        sliderValue: 69,
        data:'',
        
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
      const {feed, light, pump} = this.state.data || {}
      console.log(feed, light, pump)
          return (
            
            <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
             
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
                      trackColor={{ false: "#767577", true:  "#6291BF" }}
                      thumbColor={this.toggleSwitch ? "rgb(63, 112, 177)" : "#fffff"}
                      onValueChange = {this.toggleSwitch}
                      value = {this.state.toggled}>
                  </Switch>
                  <Text style = {{ paddingBottom: 40, alignContent: 'center', color: "rgb(63, 112, 177)"}}> {this.state.toggled ? 'ON' : 'OFF'}</Text>
               </View>
             </View>


             <View style={styles.box}>
             <View style = {styles.inner}>
             <Image style={styles.image}
                        source = {require('../img/fan.png')}></Image>
               <Slider style = {styles.slider}
                  minimumValue={0}
                  maximumValue={1000}
                  minimumTrackTintColor="#6291BF"
                  maximumTrackTintColor= "#6291BF"
                  thumbTintColor = "rgb(63, 112, 177)"
                  step={100}
                  value={this.state.sliderValue}
                  onValueChange={(value) => this.setState({sliderValue: value})}
                />
                <Text style = {{ paddingTop: 12, alignContent: 'center', color: "rgb(63, 112, 177)"}}>
                     {this.state.sliderValue}
                  </Text>
               </View>
             </View>


             <View style={styles.box}>
             <View style = {styles.inner}>
             <Image style={styles.image}
                        source = {require('../img/pump.png')}></Image>
               <Switch style = {styles.switch}
                      trackColor={{ false: "#767577", true:  "#6291BF" }}
                      thumbColor={this.toggledSwitch ? "rgb(63, 112, 177)" : "#fffff"}
                      onValueChange = {this.toggledSwitch}
                      value = {this.state.toggle}>
                  </Switch> 
                  <Text style = {{ paddingBottom: 40, 
                                    alignContent: 'center', 
                                    color: "rgb(63, 112, 177)"}}> 
                                {this.state.toggle ? 'ON' : 'OFF'}</Text>
               </View>
               </View>
            
             </ScrollView>
             </SafeAreaView>
          );
    }
}
export default Screen1;