// import React, {Component} from 'react';
// import {View, Text, StyleSheet, Content, ListItem, Body} from 'react-native';
// import * as firebase from 'firebase'



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

 
 
// class realtimedatabase extends Component{

//     constructor(props) {
//         super(props);
//             this.state = {
//                 data: [],
//             }
//         }
    
//         async componentDidMount(){
//             await firebase.database().ref("/sensors").on("value", o => {
//                 if (o.val()){
//                   this.setState({data:Object.values(o.val())})
//                 }
               
//                 })
//                 }

//     render (){
//       console.log(this.state.data)
//             const {Temperature, Humidity, Light, ph
//             } = this.state.data || {}
//             console.log(Temperature, Humidity, Light, ph)  
            
//             return(
//                 <View style ={styles.container}>
//                     <Text style={styles.title}>RealTime Data</Text>
//                     {
//                       this.state.data.map((item)=>{
//                         return(<View style={{borderBottomColor:'lghtgray',borderBottomWidth}}>

//                           <Text>Humidity :{item.Humidity}</Text>
//                           <Text> Ph is : {item.Ph}</Text>
//                           <Text>Light iS :{item.light}</Text>
//                           <Text> Temperature is: {item.Temperature}</Text>
//                         </View>)
//                       })
//                     }
//                 </View>
//                   );
//             }
//           }
      
//   export default realtimedatabase;