
import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import {  StyleSheet, Text, ScrollView, View, Image } from "react-native";
import * as firebase from 'firebase';
const styles = StyleSheet.create({
  label:{
    textAlign: 'center',
    fontSize: 16,
    alignContent: 'center',
    fontFamily: 'serif',
    color: "rgb(63, 112, 177)",
    paddingTop: 40,
    fontWeight: "bold",
  },
  contentContainer: {
    justifyContent: "center",
    flexWrap:"wrap",
    flexDirection:"row",
    backgroundColor: "rgb(208,220,224)",
    alignItems: 'center',
    width: '100%'
  },
  box: {
    width: 165,
    height: 280,
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
  image:{
    width: 100,
    height: 100,
    borderRadius: 13
  },
  text:{
    textAlign: 'center',
    fontSize: 14,
    alignContent: 'center',
    fontFamily: 'serif',
    paddingTop: 30,
    color: "rgb(63, 112, 177)",
  }
});
class Screen2 extends Component {

  constructor(props) {
    super(props);
        this.state = {
            data:'',
        }
    }

    async componentDidMount(){
        firebase.database().ref("Status").on("value", o => {
            if (o.val()){
              this.setState({data:(o.val())})
              // console.log("in Firebase")
              // console.log(o)
              //console.log(o.val())
            }
           
            })
            }

  render(){
    console.log(this.state.data)
    const {HumidityTemp, Light, Ph, Soil, WaterTemp, Battery
    } = this.state.data || {}
    console.log(HumidityTemp, Light, Ph, Soil, WaterTemp, Battery)  
    
    return(
     <SafeAreaView style = {styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.box}>
          <View style = {styles.inner}>
          <Image style={styles.image}
                        source = {require('../img/battery.png')}></Image>
          <Text style={styles.label}>Battery</Text>
          <Text style={styles.text} > {'Status: ' + Battery + '%'} </Text>
          </View>
        </View>
        <View style={styles.box}>
        <View style = {styles.inner}>
        <Image style={styles.image}
                        source = {require('../img/drop.png')}></Image>
          <Text style={styles.label}>Ph Sensor</Text>
          <Text style={styles.text}> { 'Status: ' + Ph} </Text>
          </View>
        </View>
        <View style={styles.box}>
        <View style = {styles.inner}>
        <Image style={styles.image}
                        source = {require('../img/iridiscent.png')}></Image>
          <Text style={styles.label}>Light Sensor</Text>
          <Text style={styles.text}> { 'Status: ' + Light}</Text>
          </View>
        </View>
        <View style={styles.box}>
        <View style = {styles.inner}>
        <Image style={styles.image}
                        source = {require('../img/temperature.png')}></Image>
          <Text style={styles.label}>Soil Moisture</Text>
          <Text style={styles.text}> { 'Status: ' + Soil}</Text>
          </View>
        </View>
        <View style={styles.box}>
        <View style = {styles.inner}>
        <Image style={styles.image}
                        source = {require('../img/water-temperature.png')}></Image>
          <Text style={styles.label}>Water Temperature</Text>
          <Text style={styles.text}> { 'Status: ' + WaterTemp}</Text>
          </View>
        </View>
        <View style={styles.box}>
        <View style = {styles.inner}>
        <Image style={styles.image}
                        source = {require('../img/humidity.png')}></Image>
          <Text style={styles.label}>Temperature & Humidity</Text>
          <Text style={styles.text}> { 'Status: ' + HumidityTemp}</Text>
          </View>
        </View>
        <View style={styles.box}>
        <View style = {styles.inner}>
        <Image style={styles.image}
                        source = {require('../img/pump.png')}></Image>
          <Text style={styles.label}>Water Pump</Text>
          <Text style={styles.text}> { 'Status: ' + HumidityTemp}</Text>
          </View>
        </View>
       
        </ScrollView>
        </SafeAreaView>

      
    );
}
}

export default Screen2;