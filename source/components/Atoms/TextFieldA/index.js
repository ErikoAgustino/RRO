import React from 'react';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const TextFieldA = ({ textplaceholder, secureText, onChangeTextA }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f5f6", marginTop: 20, borderRadius: 7 }} >
            <Image style={{ width: 25, height: 25, marginLeft: 10 }} source={require("../../../assets/ellipse.png")} />
            <TextInput style={{ height: 50, borderRadius: 7, fontSize: 16, paddingLeft: 16, paddingRight: 10, flex: 1 }} onChangeText={onChangeTextA} secureTextEntry={secureText} placeholder={textplaceholder} />
        </View>
    );
};

export default TextFieldA;