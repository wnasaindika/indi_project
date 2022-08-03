import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../componenet/PrimaryButton";

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
        <View style={styles.inputContainer}>
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

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        elevation: 4,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontWeight: 'bold',
        marginVertical: 8,
        fontSize: 22,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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