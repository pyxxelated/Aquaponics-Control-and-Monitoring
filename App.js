import React, {Component} from 'react';
import Home from './screens/home';
import Monitoring from './screens/monitoring';

//import Tab1 from './tabs/tab1';
//import Tab2 from './tabs/tab2';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
render (){

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Home}/>
      <Stack.Screen name="Monitoring" component={Monitoring} />
    </Stack.Navigator>


    return(
          <Home/>
    );
  }
}