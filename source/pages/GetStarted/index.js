import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonLong from "../../components/Atoms/ButtonLong";

export default class GetStarted extends Component {
    render() {
        return (
            <View style={{ paddingTop: 16, flex: 1, backgroundColor: "#FFFFFF" }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />

                <Image style={{ width: 400, height: 400 }} source={require("../../assets/rero.png")} />
                <View style={{ paddingHorizontal: 40 }}>
                    <View style={{ paddingBottom: 60 }}>
                        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#D86B22" }}>rero.</Text>
                        <Text style={{ fontSize: 20, color: "#D86B22" }} >save time.{"\n"}reserve{"\n"}now</Text>
                    </View>
                    <ButtonLong title="Get Started" onPress={() => this.props.navigation.navigate("Login")} />
                </View>
            </View>
        )
    }
}