import React from 'react';
import { Text, View, Image } from 'react-native';

const NearMeViewItem = (props) => {
    return (
        <View style={{ width: 200, height: 180, borderWidth: 2, borderColor: "#e8e8e8", backgroundColor: "#F7F9FA", marginRight: 10 }}>
            <View style={{ alignItems: "center" }}>
                <View style={{ padding: 5, flexDirection: "row" }}>
                    <Image style={{ width: 180, height: 120 }} source={require("../../../assets/imagedumb.png")} />
                </View>
            </View>

            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                    {props.restaurantName}
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ width: 16, height: 16 }} source={require("../../../assets/location.png")} />
                    <Text>{props.restaurantLocation}</Text>
                </View>
            </View>
        </View>
    );
};

export default NearMeViewItem;