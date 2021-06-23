import React, {Component} from 'react';
import Home from './screens/home';
import Monitoring from './screens/monitoring';
import realtimedatabase from './realtimedatabase';
import Analytics from './analytics';
import Screen1 from './drawers/screen1';
import Screen2 from './drawers/screen2';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator, MaterialTopTabView} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import firebase, { analytics } from 'firebase'
import { config } from './firebase';

            
if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const Tab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const ControlStack = createStackNavigator();
const MonitoringStack = createStackNavigator();
const MaintenanceStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Home Page
 const HomeStackScreen = ({navigation}) => ( 
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" 
                        component={Home}  
                        options={{ headerLeft: () => (
                  <Icon.Button name ="navicon" 
                               size = {29}
                               color="rgb(208,220,224)" 
                               backgroundColor='rgb(27, 53, 145)' 
                               onPress={() => navigation.openDrawer()}>
                  </Icon.Button>
                  ),
                  headerStyle: {
                      backgroundColor: 'rgb(27, 53, 145)' ,
                  },
                  headerTintColor: "rgb(208,220,224)",
                  headerTitleStyle:{
                      fontFamily: 'serif'
                  }
                  }}/>
    </HomeStack.Navigator>
 )

 //Control Page
 const ControlStackScreen = ({navigation}) => ( 
  <ControlStack.Navigator>
    <ControlStack.Screen name="Control" 
                         component={Screen1}
                         options={{headerLeft: () => (
                  <Icon.Button name ="navicon" 
                               size = {29}
                               color="rgb(208,220,224)" 
                               backgroundColor="rgb(27, 53, 145)" 
                               onPress={() => navigation.openDrawer()}>
                  </Icon.Button>
                  ),
                  headerStyle: {
                      backgroundColor: 'rgb(27, 53, 145)' ,
                  },
                  headerTintColor: "rgb(208,220,224)",
                  headerTitleStyle:{
                      fontFamily: 'serif'
                  }
                  }}/>
  </ControlStack.Navigator>
)

//Monitoring Page
const MonitoringStackScreen = ({navigation}) => ( 
  <MonitoringStack.Navigator>
    <MonitoringStack.Screen name="Monitoring" 
                            component={TopTabs}
                            options={{headerLeft: () => (
                  <Icon.Button name ="navicon" 
                               size = {29}
                               color="rgb(208,220,224)" 
                               backgroundColor="rgb(27, 53, 145)" 
                               onPress={() => navigation.openDrawer()}>
                  </Icon.Button>
                  ),
                  headerStyle: {
                      backgroundColor: 'rgb(27, 53, 145)' ,
                  },
                  headerTintColor: "rgb(208,220,224)",
                  headerTitleStyle:{
                      fontFamily: 'serif'
                  }
                  }}/>
  </MonitoringStack.Navigator> 
)

//Maintenance Page
const MaintenanceStackScreen = ({navigation}) => ( 
  <MaintenanceStack.Navigator>
    <MaintenanceStack.Screen name="Maintenance" 
                             component={Screen2}
                             options={{headerLeft: () => (
                    <Icon.Button name ="navicon" 
                                 size = {29}
                                 color="rgb(208,220,224)" 
                                 backgroundColor="rgb(27, 53, 145)" 
                                 onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                    ),
                    headerStyle: {
                        backgroundColor: 'rgb(27, 53, 145)' ,
                    },
                    headerTintColor: "rgb(208,220,224)",
                    headerTitleStyle:{
                        fontFamily: 'serif'
                    }
                    }}/>
  </MaintenanceStack.Navigator>
)

//For Analytics and Realtime Database
 const TopTabs =() => {
    return(
    <Tab.Navigator 
        tabBarOptions = {{
            activeTintColor: 'rgb(27, 53, 145)',
            inactiveTintColor: 'rgb(63, 112, 177)',
        style: {
            backgroundColor : 'rgb(208,220,224)' ,
        },
      }}
      
     >
        <Tab.Screen name="RealTime Data" 
                    component={realtimedatabase}/>
        {/* <Tab.Screen name="Analytics" 
                    component={Analytics}/> */}
    </Tab.Navigator>
    );
 }



export default class App extends Component {
render (){
    return(

      //Drawers
      <NavigationContainer>
        <Drawer.Navigator 
           drawerStyle={{
              backgroundColor: "rgb(208,220,224)",
              width: 240,
              }}
           drawerContentOptions={{
              activeTintColor: 'rgb(27, 53, 145)',
              inactiveTintColor: "rgb(63, 112, 177)",
              fontFamily: 'serif'
              }}
          
          >
          <Drawer.Screen name="Home" 
                        component={HomeStackScreen} />
          <Drawer.Screen name="Control" 
                        component={ControlStackScreen} />
          <Drawer.Screen name="Monitoring" 
                        component={MonitoringStackScreen}/>
          <Drawer.Screen name="Maintenance" 
                        component={MaintenanceStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
