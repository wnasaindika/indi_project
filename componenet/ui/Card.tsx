import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../utils/Colors';

function Card({ children }) {
    return (<View style={styles.card}>{children}</View>);
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        elevation: 4,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});