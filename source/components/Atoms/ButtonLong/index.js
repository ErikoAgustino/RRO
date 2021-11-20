import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonLong = (props) => {
    return (
        <TouchableOpacity style={{ backgroundColor: "#F9B153", alignItems: "center", justifyContent: "center", borderRadius: 7, height: 50, width: 320 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }} >{props.title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonLong;