import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import * as firebase from 'firebase'



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       fontSize: 25,
//       fontWeight: 'bold',
//     }
//   }); 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
            fontSize: 25,
            fontWeight: 'bold',
          },
    parentView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    flatList: {
      width: '100%',
    },
    listText: {
      color: 'white',
    },
    listItem: {
      flex: 1,
      marginRight: 20,
      marginLeft: 20,
      marginTop: 10,
      backgroundColor: '#776677',
      padding: 10,
      borderRadius: 5,
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
                <View style ={styles.container}>
                    <Text style= {styles.title}>RealTime Data</Text>
                        <View>
                          <Text >{"Humidity: " + Humidity} </Text>
                          <Text >{"Ph: " + Ph} </Text>
                          <Text >{"Light: " + Light} </Text>
                          <Text >{"Temperature: " + Temperature} </Text>
                        </View>
                </View>
                  );
            }
          }
      
  export default realtimedatabase;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   }
// }); 



// class realtimedatabase extends Component{

//   constructor(props) {
//       super(props);
//           this.state = {
//               data:'',
//           }
//       }
  
//       async componentDidMount(){
//           firebase.database().ref("Sensor").on("value", o => {
//               if (o.val()){
//                 this.setState({data:Object.values(o.val())})
//                 console.log("in Firebase")
//                 console.log(o,36)
//                 console.log(o.val(),37)
//               }
             
//               })
//               }

//   render (){
//     console.log(this.state.data,44)
//          // const {Temperature, Humidity, Light, Ph
//           //} = this.state.data || {}
//           //console.log(Temperature, Humidity, Light, Ph)  
          
        
//           return(
//               <View style ={styles.container}>
//                   <Text style={styles.title}>RealTime Data</Text>
//                   {
//                       this.state.data !== '' ? 
//                       <View>
//                         <Text>Humidity: {this.state.Humidity ? this.state.Humidity : 'null'} </Text>
//                         <Text>Ph: {this.state.Ph ? this.state.Ph : 'null'} </Text>
//                         <Text>Light: {this.state.Light ? this.state.Light : 'null'} </Text>
//                         <Text>Temperature: {this.state.Temperature ? this.state.Temperature : 'null'} </Text>
//                       </View>
//                       : <ActivityIndicator color='blue'/>
//                   }
                      
//               </View>
//                 );
//           }
//         }
    
// export default realtimedatabase;