import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import {Text, TouchableOpacity} from 'react-native';

function Button(props) {
    return <TouchableOpacity
        onPress={() => props.onPress()}
        style={{
            backgroundColor: props.color,
            flexDirection: 'row',
            padding: 16,
            paddingLeft: 12,
            marginEnd: 16,
            borderRadius: 4,
        }}>
        <Feather name={props.icon} color={'#fff'} size={18}/>
        <Text style={{
            marginLeft: 8,
            color: '#fff',
        }}>{props.text}</Text>
    </TouchableOpacity>
}

export default Button;
