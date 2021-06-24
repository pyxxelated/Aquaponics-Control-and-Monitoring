import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Modal, Pressable, TouchableOpacity, SafeAreaView} from 'react-native';
import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler';
import RNSpeedometer from 'react-native-speedometer';
import { ImageBackground } from 'react-native';
import { hotpink } from 'color-name';
  
  const styles = StyleSheet.create({
        
            label:{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'serif',
              color: "#4472ca",
              fontWeight: "bold",
              paddingBottom:40
            },
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
              height: 330,
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
              width: 100,
              height:100,
              paddingTop:60,
              marginBottom:70
            },

            scrollView: {
            },
            container:{
             flex: 1
            },
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
                  <Text style = {styles.label} > Humidity </Text>
                  <ImageBackground source = {require('./img/humid.png')}
                           style = {styles.images} 
                           imageStyle={{opacity: 0.3}}>
                    <RNSpeedometer value ={Humidity}
                                  size= {100}
                                  minValue={0}
                                  maxValue={100}
                                  allowedDecimals = {2}
                                  labels={[
                                    {
                                     name: 'Cold',
                                     labelFontSize: 12,
                                     activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      name: 'Moderate',
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      name: 'Nuetral',
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      name: 'Warm',
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      name: 'Hot',
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
                    <Text style = {styles.label}> Ph Level </Text>
                    <ImageBackground source ={require('./img/watester.png')} style = {styles.images}
                    imageStyle={{opacity: 0.3}}>
                     <RNSpeedometer value={Ph}
                                   size={100}
                                   minValue={0}
                                   maxValue={14}
                                   allowedDecimals = {2}
                                   labels={[
                                    {
                                      name: 'Acidic',
                                      activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      name: 'Neutral',
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      name: 'Basic',
                                      activeBarColor: '#5e7ce2',
                                    },
                                  ]}/>
                    </ImageBackground>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <Text style = {styles.label}> Light </Text>
                    <ImageBackground source ={require('./img/ground.png')} style = {styles.images}
                  imageStyle={{opacity: 0.3}}>
                    <RNSpeedometer value={Light} 
                                   size={100}
                                   minValue={0}
                                   maxValue={1000}
                                   allowedDecimals = {2}
                                   labels={[
                                    {
                                      name: 'Dark',
                                      activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      name: 'Dim',
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      name: 'Normal',
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      name: 'Bright',
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      name: 'Ver Bright',
                                      activeBarColor: '#0a369d',
                                    },
                                  ]}/>
                     </ImageBackground>
                     </View>
                     </View>
                     <View style = {styles.box}>
                     <View style = {styles.inner}>
                     <Text style = {styles.label}> Temperature </Text>
                     <ImageBackground source ={require('./img/hot.png')} style = {styles.images}
                       imageStyle={{opacity: 0.3}}>
                     <RNSpeedometer value={Temperature} 
                                     size={100}
                                     minValue={0}
                                     maxValue={100}
                                     allowedDecimals = {2}
                                     labels={[
                                      {
                                        name: 'Cold',
                                        activeBarColor: '#cfdee7' ,
                                      },
                                      {
                                        name: 'Moderate',
                                        activeBarColor: '#92b4f4',
                                      },
                                      {
                                        name: 'Neutral',
                                        activeBarColor: '#5e7ce2',
                                      },
                                      {
                                        name: 'Warm',
                                        activeBarColor: '#4472ca',
                                      },
                                      {
                                        name: 'Hot',
                                        activeBarColor: '#0a369d',
                                      },
                                    ]}/>
                    </ImageBackground>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.inner}>
                    <Text style = {styles.label}> Water Level</Text>
                    <ImageBackground source ={require('./img/waterlevel.png')} style = {styles.images}
                   imageStyle={{opacity: 0.3}}>
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
                    <Text style = {styles.label}> Soil Moisture </Text>
                    <ImageBackground source ={require('./img/soiltemp.png')} style = {styles.images}
                    imageStyle={{opacity: 0.3}}>
                    <RNSpeedometer value={Soil} 
                                   size={100}
                                   minValue={0}
                                   maxValue={1500}
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
                    <Text style = {styles.label}> Water Temperature </Text>
                    <ImageBackground source ={require('./img/watemp.png')} style = {styles.images}
                    imageStyle={{opacity: 0.3}}>
                    <RNSpeedometer value={WaterTemp} 
                                   size={100}
                                   minValue={0}
                                   maxValue={200}
                                   allowedDecimals = {2}
                                   labels={[
                                    {
                                      name: 'Cold',
                                      activeBarColor: '#cfdee7' ,
                                    },
                                    {
                                      name: 'Moderate',
                                      activeBarColor: '#92b4f4',
                                    },
                                    {
                                      name: 'Neutral',
                                      activeBarColor: '#5e7ce2',
                                    },
                                    {
                                      name: 'Warm',
                                      activeBarColor: '#4472ca',
                                    },
                                    {
                                      name: 'Hot',
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

