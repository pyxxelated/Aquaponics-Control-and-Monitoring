// import * as React from 'react';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Monitoring from './monitoring';

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

class Home extends Component {
    render(){ 
          return (
            <View style={styles.container}>
            {/* <Button title='Feed Fish' onPress={() => alert('Done')}/> */}
            <Button title='Monitoring' onPress={() => this.props.navigation.navigate('Monitoring')}/>
            </View>
          );
    }
}

export default Home;