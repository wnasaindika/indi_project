import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../componenet/ui/PrimaryButton';
import Title from '../componenet/ui/Title';
import Colors from '../utils/Colors';

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {

    return (
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summeryText}>
                Your phone needed <Text style={styles.highlightedText}>{roundNumber}</Text> rounds to
                guess the number <Text style={styles.highlightedText}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>

    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
        padding: 24
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summeryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlightedText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary800
    }
});