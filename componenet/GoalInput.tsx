
import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
    const [entredGoalText, setEntredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEntredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.addGoal(entredGoalText);
        setEntredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    placeholder='add your goals'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={entredGoalText}
                />
                <View style={styles.buttonContianer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        padding: 16,

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#efd0ff',
        backgroundColor: '#efd0ff',
        borderRadius: 8,
        width: '100%'
    },
    buttonContianer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});

export default GoalInput;