import { React, useState } from "react";
import { View, Text, TextInput, Alert, Button, Keyboard } from "react-native";
import { API_KEY } from '@env'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import calculationStyles from "../../styles/calculationStyles";
import Header from "../Header";

const CalculationScreen = () => {
    const [zip_code, setZipCode] = useState(null);
    const [cost, setCost] = useState(null);
    const [split, setSplitAmount] = useState(null);
    const [tip, setTipAmount] = useState(null);
    const [share, setSharingOption] = useState(false);
    const [total, setTotal] = useState(0);
    const [totalSplit, setTotalSplit] = useState(0);

    const calculateTotal = async () => {
        try {
            if (!(cost) || !(zip_code) || (share && !(tip) || !(split))) {
                Alert.alert("Input Validation", "Please enter valid amount for field(s)");
                return;
            }

            const heading = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${API_KEY}`,
                    'X-RapidAPI-Host': 'sales-tax-by-api-ninjas.p.rapidapi.com'
                }
            };

            const response = await fetch(`https://sales-tax-by-api-ninjas.p.rapidapi.com/v1/salestax?zip_code=${zip_code}`, heading);
            if (response.ok) {
                const res = await response.json();
                const taxRate = parseFloat(res[0].total_rate);
                const taxAmount = (cost) * taxRate;
                setTotal((parseFloat(cost) + taxAmount).toFixed(2));
                if (share) {
                    setTotalSplit(((parseFloat(cost) + taxAmount + tip) / split).toFixed(2));
                };

                Keyboard.dismiss();
            }
            else {
                Alert.alert('Error Calculating Total Cost', 'No Tax Rate Found');
            };
        }
        catch (error) {
            console.log(error)
            Alert.alert('Error Calculating Total Cost', `Failed to do calculation with error ${error}`);
        };
    };

    const handleSharingOption = () => {
        setSharingOption(!share);
    };

    return (
        <View>
            <Header />
            <View>
                <Text style={calculationStyles.titleText}>Calculation</Text>
                <FontAwesome6 name={"people-group"} size={25} color={"#3498db"} onPress={handleSharingOption} />
                <TextInput
                    placeholder="Meal cost"
                    keyboardType="numeric"
                    value={cost}
                    onChangeText={(value) => setCost(value)}
                />
                <TextInput
                    placeholder="Zip Code"
                    keyboardType="numeric"
                    value={zip_code}
                    onChangeText={(value) => setZipCode(value)}
                />
                {share &&
                    <>
                        <TextInput
                            placeholder="Tip amount"
                            keyboardType="numeric"
                            value={tip}
                            onChangeText={(value) => setTipAmount(value)}
                        />
                        <TextInput
                            placeholder="Number of people including self"
                            keyboardType="numeric"
                            value={split}
                            onChangeText={(value) => setSplitAmount(value)}
                        />
                    </>
                }
                <Text>Total Cost: {total}</Text>
                {share && <><Text>Total Split Amount: {totalSplit}</Text></>}
                <Button title="Calculate Total" onPress={calculateTotal} />
            </View>
        </View>
    );
};

export default CalculationScreen