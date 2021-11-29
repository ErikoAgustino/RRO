import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, View } from "react-native";
import NavigationBar from "../../containers/NavigationBar";
import NearMeView from "../../containers/NearMeView";
import RecentlyView from "../../containers/RecentlyView";
import CravingView from "../../containers/CravingView";
import UserView from "../../containers/UserView";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import test from "../test";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            ArrayRestaurant: [],
        };
    }

    componentDidMount() {
        this.getUser()
        this.FetchNearMeRestaurants()
    }

    setAttributState = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    getUser = async () => {
        try {
            const value = await AsyncStorageLib.getItem("username");
            this.setAttributState(value, 'username')
        } catch (e) {
            console.log(e)
        }
    }



    FetchNearMeRestaurants = async () => {
        const restaurants = await firestore().collection("Restaurants").get();
        const allData = restaurants.docs.map((doc) => {
            const temp = {};
            temp['id'] = doc.id;
            temp['name'] = doc.data().name;
            temp['location'] = doc.data().location;
            return temp;
        });

        this.setAttributState(allData, 'ArrayRestaurant');
    }

    render() {
        if (this.state.username != '') {

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
                            <UserView username={this.state.username} />
                            <RecentlyView />
                            <CravingView />
                            <NearMeView NearMeRestaurants={this.state.ArrayRestaurant} />
                        </View>
                    </ScrollView>
                    <NavigationBar />
                </View>
            )

        } else {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
    }

}