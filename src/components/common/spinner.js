import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({size}) => {
    return(
        <View style={styles.containerStyle}>
            <ActivityIndicator size={size || "large"} color="#007aff"/>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        margin: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Spinner };