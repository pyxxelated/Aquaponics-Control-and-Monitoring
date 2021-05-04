import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Modal, Pressable, TouchableOpacity, SafeAreaView} from 'react-native';
import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler';
import RNSpeedometer from 'react-native-speedometer';

  const styles = StyleSheet.create({
          title: {
            fontSize: 30,
            fontWeight: 'bold',
            color: "rgb(63, 112, 177)",
            alignContent: 'center',
            fontFamily: 'serif',
            justifyContent: 'center'
          },
            //yawa
            // modalView: {
            //   margin: 20,
            //   backgroundColor: "white",
            //   borderRadius: 20,
            //   padding: 35,
            //   alignItems: "center",
            //   shadowColor: "#000",
            //   shadowOffset: {
            //     width: 0,
            //     height: 2
            //   },
            //   shadowOpacity: 0.25,
            //   shadowRadius: 4,
            //   elevation: 5
            // },
            // button: {
            //   borderRadius: 20,
            //   padding: 10,
            //   elevation: 2
            // },
            // buttonOpen: {
            //   backgroundColor: "#F194FF",
            // },
            // buttonClose: {
            //   backgroundColor: "#2196F3",
            // },
            // textStyle: {
            //   color: "white",
            //   fontWeight: "bold",
            //   textAlign: "center"
            // },
            // modalText: {
            //   marginBottom: 15,
            //   textAlign: "center"
            // },
            label:{
              textAlign: 'center',
              fontSize: 16,
              alignContent: 'center',
              fontFamily: 'serif',
              color: "rgb(63, 112, 177)",
              paddingTop: 10,
              fontWeight: "bold",
            },
            contentContainer: {
              padding: 10,
              flexWrap: "wrap",
              flexDirection: "row",
              backgroundColor: "rgb(208,220,224)",
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


          }
        );
       
      
class realtimedatabase extends Component{

    constructor(props) {
        super(props);
            this.state = {
                data:'',
            }
        }
       
        async componentDidMount(){
            firebase.database().ref("Sensor").on("value", o => {
                if (o.val()){
                  this.setState({data:(o.val())})
                }
               
                })
                }

               

    render (){ 
      console.log(this.state.data)
            const {Temperature, Humidity, Light, Ph, Soil, WaterTemp
            } = this.state.data || {}
            console.log(Temperature, Humidity, Light, Ph, Soil, WaterTemp)  
            
          
            return(
              <SafeAreaView style = {styles.container}>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.box}>
                  <View style = {styles.inner}>
                    <RNSpeedometer value={Humidity}
                                  size={100}
                                  minValue={0}
                                  maxValue={100}
                                  labels={[
                                    {
                                     activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      activeBarColor: '#0a369d',
                                    },
                                  ]}/>
                    </View>
                    </View>
                   
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <RNSpeedometer value={Ph}
                                   size={100}
                                   minValue={0}
                                   maxValue={250}
                                   labels={[
                                    {
                                      activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      activeBarColor: '#0a369d',
                                    },
                                  ]}/>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <RNSpeedometer value={Light} 
                                   size={100}
                                   minValue={0}
                                   maxValue={500}
                                   labels={[
                                    {
                                      activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      activeBarColor: '#0a369d',
                                    },
                                  ]}/>
                     </View>
                     </View>
                     <View style = {styles.box}>
                     <View style = {styles.inner}>
                     <RNSpeedometer value={Temperature} 
                                     size={100}
                                     minValue={0}
                                     maxValue={500}
                                     labels={[
                                      {
                                        activeBarColor: '#cfdee7' ,
                                      },
                                      {
                                        activeBarColor: '#92b4f4',
                                      },
                                      {
                                        activeBarColor: '#5e7ce2',
                                      },
                                      {
                                        activeBarColor: '#4472ca',
                                      },
                                      {
                                        activeBarColor: '#0a369d',
                                      },
                                    ]}/>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                      <RNSpeedometer value={Soil} 
                                     size={100}
                                     minValue={0}
                                     maxValue={500}
                                     labels={[
                                      {
                                        activeBarColor: '#cfdee7' ,
                                      },
                                      {
                                        activeBarColor: '#92b4f4',
                                      },
                                      {
                                        activeBarColor: '#5e7ce2',
                                      },
                                      {
                                        activeBarColor: '#4472ca',
                                      },
                                      {
                                        activeBarColor: '#0a369d',
                                      },
                                    ]}/>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <RNSpeedometer value={WaterTemp} 
                                   size={100}
                                   minValue={0}
                                   maxValue={500}
                                   labels={[
                                    {
                                      activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      activeBarColor: '#0a369d',
                                    },
                                  ]}/>
                    </View>
                    </View>
                </ScrollView>   
                </SafeAreaView>

                  );
            }
          }
      
  export default realtimedatabase;

