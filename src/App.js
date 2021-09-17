import React from 'react';
import { styles } from './style';
import { View, StatusBar } from 'react-native';
// import MyButton from './MyButton';
import Box from './Box';

export default function App() {
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Box style={{ backgroundColor: 'red', flex: 1 }} />
        <Box style={{ backgroundColor: 'green', flex: 1 }} />
        <Box style={{ backgroundColor: 'blue', flex: 1 }} />
    </View>
    );
}
