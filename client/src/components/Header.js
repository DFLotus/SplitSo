import React from "react";
import { Text, View } from "react-native";
import headerStyles from "../styles/headerStyles";

const Header = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}>SplitSo</Text>
        </View>
    )
}

export default Header