import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        position: 'relative',
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'row'
    }
});

export {CardSection};