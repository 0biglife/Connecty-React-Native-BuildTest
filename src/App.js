import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MyButton from './MyButton';

export default function App() {
    const [addition, setAddition] = useState(0);
    const [multiple, setmultiple] = useState(1);

    return (
    <View style={styles.container}>
        <TextInput 
        // onChange={event => console.log(event.nativeEvent.text)}
        onChangeText={text => console.log(text)}
        style={{borderWidth: 1, padding: 10, fontSize: 20}}
        />
        <Text style={styles.errorText}>{addition}</Text>
        <Text style={{fontSize: 20}}>{multiple}</Text>
        <MyButton title="Addition" onPress={() => setAddition(addition + 2)} />
        <MyButton title="Multiple" onPress={() => setmultiple(multiple * 2)} /> 
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        backgroundColor: 'black',
        color: 'red',
        fontSize: 20
    }
});
