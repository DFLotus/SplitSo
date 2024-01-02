import React from "react";
import { View, Text } from "react-native";
import calculationStyles from "../../styles/calculationStyles";
import Header from "../Header";

const Profile = () => {
    return (
        <View>
            <Header />
            <View>
                <Text style={calculationStyles.titleText}>Profile Page</Text>
            </View>
        </View>
    )
};

export default Profile