import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from "react-native";
import ButtonLong from "../../components/Atoms/ButtonLong";
import TextFieldA from "../../components/Atoms/TextFieldA";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FEDC78" }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />
                <View style={{ paddingVertical: 40, paddingHorizontal: 16 }}>
                    <Image source={require("../../assets/ellipse.png")} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 40, backgroundColor: "#FFFFFF", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome Back!</Text>
                        <Text style={{ fontSize: 16 }}>Enter your login details</Text>
                    </View>

                    <View style={{ marginBottom: 150, marginTop: 50 }}>
                        <TextFieldA textplaceholder="Username" />
                        <TextFieldA textplaceholder="Password" secureText={true} />
                        <View style={{ marginTop: 30 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: "#D86B22" }}>Forget password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View>
                        <TouchableOpacity style={{ backgroundColor: "#F9B153", alignItems: "center", justifyContent: "center", borderRadius: 7, height: 50, width: 320 }} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }} >test</Text>
                        </TouchableOpacity>
                        <ButtonLong title="Sign In" />
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 16 }}>Don't have account? </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: "#D86B22" }}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}