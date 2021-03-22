import React,{useState} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import * as firebase from 'firebase'
const AddData = ()=>{
    const [Humidity,setHumidity] = useState('')
    const [light,setLight] = useState('')
    const [Ph,setPh] = useState('')
    const [Temperature,setTemperature] = useState('')


    const addDatatoDatabase =()=>{
        firebase.database().ref('/sensors')
        .push()
        .set({
            Humidity,
            light,
            Ph,
            Temperature

        })
        .then(()=>{
            alert('Data added')
        })
        .catch((err)=>{
            alert(err)
        })

    }
    return(
        <View>
                <TextInput placeholder="humidity"  onChangeText={text=>setHumidity(text)} />
                <TextInput placeholder="light" onChangeText={text=>setLight(text)} />
                <TextInput placeholder="ph"  onChangeText={text=>setPh(text)} />
                <TextInput placeholder="Temperature"  onChangeText={text=>setTemperature(text)} />

                <Button 
                title="Add Data"
                onPress={addDatatoDatabase}
                />
        </View>
    )
}

export default AddData