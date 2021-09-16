import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
        <Text style={{color: 'blue'}}>Connecty App!</Text>
        <StatusBar style="auto" />
        <Button title="Button" onPress={() => alert('Tapped!!')} />
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
