import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Modal, Pressable, TouchableOpacity, SafeAreaView} from 'react-native';
import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler';
import RNSpeedometer from 'react-native-speedometer';
import { ImageBackground } from 'react-native';

  
  const styles = StyleSheet.create({
        
            label:{
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'serif',
              color: "#4472ca",
              paddingBottom: 70, 
              paddingTop: 0,
              fontWeight: "bold",
            },
            contentContainer: {
              padding: 15,
              flexWrap: "wrap",
              flexDirection: "row",
              backgroundColor: "rgb(208,220,224)",
            },
            box: {
              width: 165,
              height: 290,
              padding: 10,
            },
            inner:{
              backgroundColor: 'rgb(185, 198, 210)',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              borderRadius: 10,
            },
            images: {
              width: 120,
              height:120,
              justifyContent: 'center',
              paddingBottom: 20,
            },

            scrollView: {
            },
            container:{
             flex: 1
            },
            // text:{
            //   textAlign: 'center',
            //   fontSize: 14,
            //   alignContent: 'center',
            //   fontFamily: 'serif',
            //   paddingTop: 30,
            //   color: "rgb(63, 112, 177)",
            // }
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
            const {Temperature, Humidity, Light, Ph, Soil, WaterTemp, WaterLevel
            } = this.state.data || {}
            console.log(Temperature, Humidity, Light, Ph, Soil, WaterTemp, WaterLevel)  
            
          
            return(
              <SafeAreaView style = {styles.container}>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                  <View style={styles.box}>
                  <View  style = {styles.inner}>
                  <ImageBackground source ={require('./img/humid.png')}
                                    style = {styles.images}
                                    imageStyle={{opacity: 0.4}}>
                  <Text style = {styles.label} > Humidity </Text>
                    <RNSpeedometer value ={Humidity}
                                  size= {100}
                                  maxValue={100}
                                  allowedDecimals = {2}
                                  labels={[
                                    {
                                     labelFontSize: 12,
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
                      
                      </ImageBackground>
                    </View>
                    </View>
                  
                    {/* </View>
                    */}
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <ImageBackground source ={require('./img/watester.png')} style = {styles.images}
                    imageStyle={{opacity: 0.4}}>
                    <Text style = {styles.label}> Ph Level </Text>
                    <RNSpeedometer value={Ph}
                                   size={100}
                                   minValue={0}
                                   maxValue={14}
                                   allowedDecimals = {2}
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
                    </ImageBackground>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <ImageBackground source ={require('./img/ground.png')} style = {styles.images}
                  imageStyle={{opacity: 0.4}}>
                    <Text style = {styles.label}> Light </Text>
                    <RNSpeedometer value={Light} 
                                   size={100}
                                   minValue={0}
                                   maxValue={500}
                                   allowedDecimals = {2}
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
                     </ImageBackground>
                     </View>
                     </View>
                     <View style = {styles.box}>
                     <View style = {styles.inner}>
                     <ImageBackground source ={require('./img/hot.png')} style = {styles.images}
                       imageStyle={{opacity: 0.4}}>
                     <Text style = {styles.label}> Temperature </Text>
                     <RNSpeedometer value={Temperature} 
                                     size={100}
                                     minValue={0}
                                     maxValue={100}
                                     allowedDecimals = {2}
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
                    </ImageBackground>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <ImageBackground source ={require('./img/waterlevel.png')} style = {styles.images}
                   imageStyle={{opacity: 0.4}}>
                    <Text style = {styles.label}> Water    Level</Text>
                      <RNSpeedometer value={WaterLevel} 
                                     size={100}
                                     minValue={0}
                                     maxValue={1}
                                     labels={[
                                      {
                                        activeBarColor: '#92b4f4',
                                      },
                                      {
                                        name: 'FULL',
                                        activeBarColor: '#4472ca',
                                      },
                                    ]}/>
                    </ImageBackground>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <ImageBackground source ={require('./img/watemp.png')} style = {styles.images}
                    imageStyle={{opacity: 0.4}}>
                    <Text style = {styles.label}> Water Temperature </Text>
                    <RNSpeedometer value={WaterTemp} 
                                   size={100}
                                   minValue={0}
                                   maxValue={100}
                                   allowedDecimals = {2}
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
                    </ImageBackground>
                    </View>
                    </View>
                </ScrollView>   
                </SafeAreaView>

                  );
            }
          }
      
  export default realtimedatabase;

