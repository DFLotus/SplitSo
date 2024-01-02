import React from "react";
import { View, Text } from "react-native";
import calculationStyles from "../../styles/calculationStyles";
import Header from "../Header";

const CalculationScreen = () => {
    return (
        <View>
            <Header />
            <View>
                <Text style={calculationStyles.titleText}>Default View Page</Text>
            </View>
        </View>
    )
}

export default CalculationScreen