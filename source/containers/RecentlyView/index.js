import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import RecentlyViewItem from '../../components/Molecules/RecentlyViewItem';

const RecentlyView = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Recently Visited</Text>
            <ScrollView horizontal style={{ flexDirection: "row" }}>

                <RecentlyViewItem restaurantName="Cafe italia" restaurantLocation="Petitenget, Bali" dateVisited="Friday, 29 Oct 19:00" />

                <RecentlyViewItem restaurantName="Rumah Makan Bu Sri" restaurantLocation="Bali" dateVisited="Saturday, 20 Nov 20:00" />

            </ScrollView>
        </View>
    );
};

export default RecentlyView;