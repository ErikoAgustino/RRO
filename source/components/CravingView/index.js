import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const CravingView = (props) => {
    return (
        <View>
            <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>What are you craving?</Text>
                    </View>
                    <View style={{ justifyContent: "flex-end" }}>
                        <Image style={{ width: 32, height: 32 }} source={require("../../assets/arrow.png")} />
                    </View>
                </View>

                <ScrollView horizontal style={{ flexDirection: "row" }}>
                    {/**item */}
                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80 }} source={require("../../assets/imagedumb.png")} />
                        <Text>Fine Dining</Text>
                    </View>

                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80 }} source={require("../../assets/imagedumb.png")} />
                        <Text>Indonesian</Text>
                    </View>

                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80 }} source={require("../../assets/imagedumb.png")} />
                        <Text>western</Text>
                    </View>

                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80 }} source={require("../../assets/imagedumb.png")} />
                        <Text>Sweets</Text>
                    </View>

                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80 }} source={require("../../assets/imagedumb.png")} />
                        <Text>Makanan</Text>
                    </View>

                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80 }} source={require("../../assets/imagedumb.png")} />
                        <Text>Makanan</Text>
                    </View>
                </ScrollView>

            </View>
        </View>
    );
};

export default CravingView;