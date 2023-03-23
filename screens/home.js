import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import Card from "../scomponent/card";
import PrimaryButton from "../scomponent/primaryButton";
import Title from "../scomponent/title";
import { Colors } from "../sconstant/color";

export default function Home({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState(null)

    function changeValue(enteredText) {
        setEnteredNumber(enteredText)
    }

    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber);
        console.log(chosenNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert(
                'Invalid input',
                'Number has to be 1 to 99',
                [
                    { text: 'okay', style: 'destructive', onPress: () => setEnteredNumber('') },
                    { text: 'not okay', style: 'default', onPress: () => console.log('not okay') }
                ]
            )
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>GUESS A NUMBER</Title>
            <Card>
                <Text style={{color:Colors.accentaccent, fontSize: 18}}>input a number </Text>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType={'number-pad'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={changeValue}
                    value={enteredNumber}
                />
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1 }}>
                        <PrimaryButton onPress={() => setEnteredNumber('')} children={"Reset"} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <PrimaryButton onPress={confirmHandler} children={"Confirm"} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        // flex:1,
        // marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        elevation: 8,
        //ios property
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput: {
        height: 55,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#f0ece2',
        borderBottomWidth: 2,
        color: Colors.accent,
        marginVertical: 8,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})