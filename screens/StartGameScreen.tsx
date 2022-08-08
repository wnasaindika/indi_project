import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from "react-native"
import Card from '../componenet/ui/Card';
import InstructionText from '../componenet/ui/InstructionText';
import PrimaryButton from "../componenet/ui/PrimaryButton";
import Title from '../componenet/ui/Title';
import Colors from '../utils/Colors';

function StartGameScreen({ onPickNumber }) {

    const [inputNumber, setInputNumber] = useState('');

    function nummberInputHandler(entredText) {
        setInputNumber(entredText);
    }

    function resetInputNumber() {
        setInputNumber('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(inputNumber);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {

            Alert.alert(
                'Invalid Number!',
                'Number has to be 0 and 100',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputNumber
                }
                ]
            );
            return;

        }
        onPickNumber(choosenNumber)
    }

    return (

        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    keyboardType={'number-pad'}
                    maxLength={2}
                    value={inputNumber}
                    onChangeText={nummberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontWeight: 'bold',
        marginVertical: 8,
        fontSize: 22,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        textAlign: 'center',
        padding: 8
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;