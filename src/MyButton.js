import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, onPress, children }) => { 
    //props에서 사용할 기본 파라미터 선선언
    return (
        <TouchableOpacity 
        onPress={() => console.log('press')}
        onPressIn={() => console.log('in')}
        onPressOut={() => console.log('out')}
        onLongPress={() => console.log('long')}
        delayLongPress={3000}
        >
            <View style={{ backgroundColor: 'red', padding: 10, margin: 30}}>
                <Text style={{fontSize: 20, color: 'white'}}>
                    {children || title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: "Default",
    onPress: () => alert('default')
};

MyButton.PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    //title: PropTypes.string.isRequired
};

export default MyButton;

