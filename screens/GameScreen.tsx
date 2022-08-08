import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from '../componenet/game/NumberContainer';
import Card from '../componenet/ui/Card';
import InstructionText from '../componenet/ui/InstructionText';
import PrimaryButton from '../componenet/ui/PrimaryButton';
import Title from '../componenet/ui/Title';

function generateNumberBetween(min, max, exclude) {
    const randNum = Math.round(Math.random() * (max - min)) + min;

    if (randNum === exclude) {
        return generateNumberBetween(min, max, exclude)
    } else {
        return randNum;
    }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateNumberBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGussHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Dont't lie", "you know that this is wrong !", [{ text: "Sorry", style: "cancel" }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundry = currentGuess;
        } else {
            minBoundry = currentGuess + 1;
        }

        const randGuess = generateNumberBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(randGuess);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponenet Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={ styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGussHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGussHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
    instructionText: {
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

export default GameScreen;