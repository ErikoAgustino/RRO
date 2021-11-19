import React from 'react';
import { Text, View, Image } from 'react-native';

const NavigationBar = (props) => {
    return (
        <View style={{ backgroundColor: "#DFE6ED", height: 60, flexDirection: "row" }}>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image style={{ width: 40, height: 40 }} source={require("../../assets/home.png")} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image style={{ width: 40, height: 40 }} source={require("../../assets/schedule.png")} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image style={{ width: 40, height: 40 }} source={require("../../assets/user.png")} />
            </View>

        </View>
    );
};

export default NavigationBar;