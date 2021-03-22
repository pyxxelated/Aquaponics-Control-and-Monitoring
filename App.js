import React, {Component} from 'react';
import Home from './screens/home';
//import Monitoring from './screens/monitoring';
import realtimedatabase from './realtimedatabase';
import Tab2 from './tabs/tab2';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator, MaterialTopTabView} from '@react-navigation/material-top-tabs';
// import AddData from './AddData';
import firebase from 'firebase'
import { config } from './firebase';

            
if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


  
 const HomeStack = () => ( 
    <Stack.Navigator>
      <Stack.Screen name="Aquaponics" component={Home}/>
      {/* <Stack.Screen name="AddData" component={AddData}/> */}
      <Stack.Screen name="Monitoring" component={TopTabs}/>
    </Stack.Navigator>
 )
  
 const TopTabs =() => {
    return(
    <Tab.Navigator>
        <Tab.Screen name="RealTime Data" component={realtimedatabase}/>
        <Tab.Screen name="Analytics" component={Tab2}/>
    </Tab.Navigator>
    );
 }



export default class App extends Component {
render (){
    return(
      <NavigationContainer>
      <HomeStack/>
      </NavigationContainer>
    );
  }
}
