import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#303F9F',
        height: 56,
        paddingLeft: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        elevation: 5
    },
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
}

export {Header};