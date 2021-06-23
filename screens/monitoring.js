// import * as React from 'react';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
//import { monitoring } from '../screen';

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
    }
  }); 

class Monitoring extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Button title='Realtime Data' onPress={() => {}}/>
                {/* <Button title='Analytics' onPress={() => {}}/> */}
            </View>
        );
    }
}

export default Monitoring;