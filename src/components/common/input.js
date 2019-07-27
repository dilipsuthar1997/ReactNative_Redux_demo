import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = ({ label, secureTextEntry, onChangeText, value, placeHolder }) => {
    return(
        <View style={sy=styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                style={styles.inputStyle}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeHolder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        paddingLeft: 20,
        color: '#000',
        width: null,
        alignSelf: 'center'
    },
    inputStyle: {
        color: '#000',
        fontSize: 18,
        flex: 4,
        paddingLeft: 10,
        paddingRight: 20,
        lineHeight: 23
    }
});

export { Input };