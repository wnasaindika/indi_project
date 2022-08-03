import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Title from '../componenet/Title';

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponenet Guess</Title>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
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
    }
});

export default GameScreen;