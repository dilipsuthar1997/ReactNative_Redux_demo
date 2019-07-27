import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({children, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        margin: 8,
        backgroundColor: '#007aff',
        alignSelf: 'stretch',
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 5
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        alignSelf: 'center'
    }
});

export {Button};