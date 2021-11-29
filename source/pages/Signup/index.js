import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ActivityIndicator } from "react-native";
import ButtonLong from "../../components/Atoms/ButtonLong";
import TextFieldA from "../../components/Atoms/TextFieldA";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";

export default class Signup extends Component {

    constructor() {
        super();
        this.dbRef = firestore().collection("Users");

        this.state = {
            username: '',
            email: '',
            password: '',
            conPassword: '',
            isLoading: false
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser() {
        if (this.state.username == '') {
            alert('Nama Kosong')
        } else if (this.state.password != this.state.conPassword && this.state.password == '') {
            alert("password tidak sama");
        } else if (this.state.email == '') {
            alert('Email Kosong')
        } else {
            this.setState({
                isLoading: true,
            });
            this.dbRef.doc(this.state.email).set({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }).then((res) => {
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    isLoading: false,
                });

            })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({
                        isLoading: false,
                    });
                });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
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
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Getting started</Text>
                        <Text style={{ fontSize: 16 }}>Create account to continue!</Text>
                    </View>

                    <View style={{ marginBottom: 100, marginTop: 20 }}>
                        <TextFieldA value={this.state.email} onChangeTextA={(val) => this.inputValueUpdate(val, 'email')} textplaceholder="Email" />
                        <TextFieldA value={this.state.username} onChangeTextA={(val) => this.inputValueUpdate(val, 'username')} textplaceholder="Username" />
                        <TextFieldA value={this.state.password} onChangeTextA={(val) => this.inputValueUpdate(val, 'password')} textplaceholder="Password" secureText={true} />
                        <TextFieldA value={this.state.conPassword} onChangeTextA={(val) => this.inputValueUpdate(val, 'conPassword')} textplaceholder="Confirm password" secureText={true} />
                    </View>


                    <View>
                        <ButtonLong title="Sign up" onPress={() => this.storeUser()} />
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 16 }}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ fontSize: 16, color: "#D86B22" }}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}