import React from 'react';
import { styles } from './style';
import { View, StatusBar} from 'react-native';
import Shadow from './Shadow';

export default function App() {
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Shadow />
    </View>
    );
}
