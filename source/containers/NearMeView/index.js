import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import NearMeViewItem from '../../components/Molecules/NearMeViewItem';

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
                <NearMeViewItem restaurantName="Rumah Makan Ibu Sri" restaurantLocation="Jln. Orchard No. 19" />
                <NearMeViewItem restaurantName="Cafe Halaman" restaurantLocation="Jln. Surya Sumantri No. 49" />

            </ScrollView>
        </View>
    );
};

export default NearMeView;