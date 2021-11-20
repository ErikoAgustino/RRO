import React from 'react';
import { Text, View, Image } from 'react-native';

const CravingViewItem = (props) => {
    return (
        <View style={{ marginRight: 10, alignItems: 'center' }}>
            <Image style={{ width: 80, height: 80 }} source={require("../../../assets/imagedumb.png")} />
            <Text>{props.title}</Text>
        </View>
    );
};

export default CravingViewItem;