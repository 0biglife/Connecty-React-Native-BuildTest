import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyButton from './MyButton';

export default function App() {
    const [addition, setAddition] = useState(0);
    const [multiple, setmultiple] = useState(1);

    return (
    <View style={styles.container}>
        <Text style={{fontSize: 20}}>{addition}</Text>
        <Text style={{fontSize: 20}}>{multiple}</Text>
        <MyButton title="Addition" onPress={()=> setAddition(addition + 2)} />
        <MyButton title="Multiple" onPress={()=> setmultiple(multiple * 2)} />
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
});
