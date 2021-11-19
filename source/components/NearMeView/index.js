import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

const NearMeView = (props) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Restaurants Near Me</Text>
                </View>
                <View style={{ justifyContent: "flex-end" }}>
                    <Image style={{ width: 32, height: 32 }} source={require("../../assets/arrow.png")} />
                </View>
            </View>

            <ScrollView horizontal style={{ flexDirection: "row" }}>

                {/**item */}
                <View style={{ width: 200, height: 180, borderWidth: 2, borderColor: "#e8e8e8", backgroundColor: "#F7F9FA", marginRight: 10 }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ padding: 5, flexDirection: "row" }}>
                            <Image style={{ width: 180, height: 120 }} source={require("../../assets/imagedumb.png")} />
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontWeight: "bold" }}>
                            Rumah Makan Ibu Sri
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 16, height: 16 }} source={require("../../assets/location.png")} />
                            <Text>Jln. Orchard No. 19</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: 200, height: 180, borderWidth: 2, borderColor: "#e8e8e8", backgroundColor: "#F7F9FA", marginRight: 10 }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ padding: 5, flexDirection: "row" }}>
                            <Image style={{ width: 180, height: 120 }} source={require("../../assets/imagedumb.png")} />
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontWeight: "bold" }}>
                            Rumah Makan Ibu Sri
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 16, height: 16 }} source={require("../../assets/location.png")} />
                            <Text>Jln. Orchard No. 19</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

export default NearMeView;