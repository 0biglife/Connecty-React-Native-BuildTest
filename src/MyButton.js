import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, onPress, children }) => { 
    //props에서 사용할 기본 파라미터 선선언
    return (
        <TouchableOpacity onPress={onPress}>
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

export default MyButton;

