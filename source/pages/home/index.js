import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import NavigationBar from "../../containers/NavigationBar";
import NearMeView from "../../containers/NearMeView";
import RecentlyView from "../../containers/RecentlyView";
import CravingView from "../../containers/CravingView";
import UserView from "../../containers/UserView";

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />
                <ScrollView>
                    <View style={{ flex: 1, padding: 16 }}>
                        <UserView username="Joseph" />
                        <RecentlyView />
                        <CravingView />
                        <NearMeView />
                    </View>
                </ScrollView>
                <NavigationBar />
            </View>
        )
    }
}