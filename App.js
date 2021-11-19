import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Router from './source/config/router';


export default function App() {
  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});