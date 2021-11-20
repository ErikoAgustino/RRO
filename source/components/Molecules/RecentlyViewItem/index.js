import React from 'react';
import { Text, View, Image } from 'react-native';

const RecentlyViewItem = (props) => {
    return (
        <View style={{ marginBottom: 20, marginRight: 10 }}>
            <View style={{ width: 230, height: 100, borderWidth: 2, borderColor: "#e8e8e8", backgroundColor: "#F7F9FA" }}>
                <View style={{ padding: 5, flexDirection: "row" }}>
                    <View>
                        <Image style={{ width: 53, height: 53 }} source={require("../../../assets/imagedumb.png")} />
                    </View>

                    <View>
                        <Text> {props.restaurantName} {"\n"} {props.restaurantLocation} {"\n"} {props.dateVisited} </Text>
                        <Image style={{ width: 100, height: 20 }} source={require("../../../assets/star.png")} />
                    </View>
                </View>
            </View>
        </View>

    );
};

export default RecentlyViewItem;