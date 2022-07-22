import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#bbbbbb" }}
                onPress={props.onDelete.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.value}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#addeee"
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    }
});

export default GoalItem