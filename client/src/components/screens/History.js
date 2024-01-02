import React from "react";
import { View, Text } from "react-native";
import calculationStyles from "../../styles/calculationStyles";
import Header from "../Header";

const History = () => {
    return (
        <View>
            <Header />
            <View>
                <Text style={calculationStyles.titleText}>History Page</Text>
            </View>
        </View>
    )
};

export default History