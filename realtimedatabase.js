import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Modal, TouchableOpacity} from 'react-native';
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
          container: {
            flex: 1,
            justifyContent: "space-around",
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
        });
       
      
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
                  console.log("in Firebase")
                  console.log(o)
                  console.log(o.val())
                }
               
                })
                }

    render (){ 
      console.log(this.state.data)
            const {Temperature, Humidity, Light, Ph
            } = this.state.data || {}
            console.log(Temperature, Humidity, Light, Ph)  
            
          
            return(
                <ImageBackground style={styles.container}>
          
                    <View>
                    <Text style= {styles.title}>RealTime Data</Text>
                    </View>
                    <TouchableOpacity style = {styles.top} onPress={() => alert('hello')}> 
                    <Text style={styles.text}>{"Humidity: " + Humidity} </Text>
                    </TouchableOpacity>
                    <View style = {styles.top}>
                     <Text style={styles.text}>{"Ph: " + Ph} </Text>
                    </View>
                    <View style = {styles.top}>
                     <Text style={styles.text}>{"Light: " + Light} </Text> 
                     </View>
                    <View style = {styles.top}>
                    <Text style={styles.text}>{"Temperature: " + Temperature} </Text>
                    </View>
                   
                </ImageBackground>
                  );
            }
          }
      
  export default realtimedatabase;

