import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

const RecentlyView = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Recently Visited</Text>
            <ScrollView horizontal style={{ flexDirection: "row" }}>

                {/**item */}
                <View style={{ marginBottom: 20, marginRight: 10 }}>
                    <View style={{ width: 230, height: 100, borderWidth: 2, borderColor: "#e8e8e8", backgroundColor: "#F7F9FA" }}>
                        <View style={{ padding: 5, flexDirection: "row" }}>
                            <View>
                                <Image style={{ width: 53, height: 53 }} source={require("../../assets/imagedumb.png")} />
                            </View>

                            <View>
                                <Text> Cafe Italia{"\n"} Petitenget, Bali {"\n"} Friday, 29 Oct 19:00 </Text>
                                <Image style={{ width: 100, height: 20 }} source={require("../../assets/star.png")} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 20, marginRight: 10 }}>
                    <View style={{ width: 230, height: 100, borderWidth: 2, borderColor: "#e8e8e8", backgroundColor: "#F7F9FA" }}>
                        <View style={{ padding: 5, flexDirection: "row" }}>
                            <View>
                                <Image style={{ width: 53, height: 53 }} source={require("../../assets/imagedumb.png")} />
                            </View>

                            <View>
                                <Text> Cafe Italia{"\n"} Petitenget, Bali {"\n"} Friday, 29 Oct 19:00 </Text>
                                <Image style={{ width: 100, height: 20 }} source={require("../../assets/star.png")} />
                            </View>
                        </View>
                    </View>
                </View>


            </ScrollView>
        </View>
    );
};

export default RecentlyView;