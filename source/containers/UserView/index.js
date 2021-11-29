import React from 'react';
import { Text, View, Image } from 'react-native';

const UserView = ({ username }) => {
    return (
        <View>
            <View style={{ marginTop: 30, marginBottom: 16, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, fontWeight: "900" }}>Hey {username}!</Text>
                </View>
                <View>
                    <Image style={{ width: 32, height: 32 }} source={require("../../assets/bell.png")} />
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Image style={{ width: 360, height: 200 }} source={require("../../assets/imagedumb.png")} />
            </View>
        </View>
    );
};

export default UserView;