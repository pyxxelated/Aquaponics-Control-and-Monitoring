import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Modal, Pressable, TouchableOpacity, SafeAreaView} from 'react-native';
import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler';

  const styles = StyleSheet.create({
          title: {
            fontSize: 30,
            fontWeight: 'bold',
            color: "rgb(63, 112, 177)",
            alignContent: 'center',
            fontFamily: 'serif'
          },
          text:{
            textAlign: 'center',
            fontSize: 17,
            alignContent: 'center',
            fontFamily: 'serif',
            color: "rgb(63, 112, 177)",
          },
          contentContainer: {
            justifyContent: "space-around",
            padding: 20,
            backgroundColor: "rgb(208,220,224)",
            alignItems: 'center',
          },
          top: {
            backgroundColor: "rgb(185, 198, 210)",
            width: '80%',
            height: 75,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          },
          scrollView: {
          },
          container:{
           flex: 1,
          },
          box:{
              padding: 10,
              width: '120%',
              alignItems: 'center'
            },
            //yawa
            modalView: {
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5
            },
            button: {
              borderRadius: 20,
              padding: 10,
              elevation: 2
            },
            buttonOpen: {
              backgroundColor: "#F194FF",
            },
            buttonClose: {
              backgroundColor: "#2196F3",
            },
            textStyle: {
              color: "white",
              fontWeight: "bold",
              textAlign: "center"
            },
            modalText: {
              marginBottom: 15,
              textAlign: "center"
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
                    <View>
                    <Text style= {styles.title}>RealTime Data</Text>
                    </View>
                    <View style = {styles.box}>
                    <TouchableOpacity  style={styles.top}
                                       onPress={() => console.log('pressed')}> 
                    <Text style={styles.text}>{"Humidity: " + Humidity} </Text>
                    </TouchableOpacity>
                    </View>
                   
                    <View style = {styles.box}>
                    <View style = {styles.top}>
                     <Text style={styles.text}>{"Ph: " + Ph} </Text>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.top}>
                     <Text style={styles.text}>{"Light: " + Light} </Text> 
                     </View>
                     </View>
                     <View style = {styles.box}>
                    <View style = {styles.top}>
                    <Text style={styles.text}>{"Temperature: " + Temperature} </Text>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.top}>
                    <Text style={styles.text}>{"Soil Moisture: " + Soil} </Text>
                    </View>
                    </View>
                    <View style = {styles.box}>
                    <View style = {styles.top}>
                    <Text style={styles.text}>{"Water Temperature: " + WaterTemp} </Text>
                    </View>
                    </View>
                </ScrollView>   
                </SafeAreaView>

                  );
            }
          }
      
  export default realtimedatabase;

