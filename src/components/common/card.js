import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 0,
        borderRadius: 10,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16
    }
});

export {Card};