import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'

class ItemLibrary extends Component {

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, selectedLibraryId } = this.props

        //ToastAndroid.show(this.props.selectedLibraryId, ToastAndroid.SHORT);
        if (library.id === selectedLibraryId) {
            return(
                <CardSection>
                    <Text style={styles.descriptionStyle}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;
        return(
            <TouchableOpacity onPress={() => this.props.selectLibrary(id)} >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle} >{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: '800',
        padding: 8,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 15,
        color: 'white',
        fontSize: 14,
        backgroundColor: '#1A237E',
        padding: 8
    }
});

const mapStateToProps = (state) => {
    return { selectedLibraryId: state.selectedLibraryId };
}

export default connect(mapStateToProps, actions)(ItemLibrary);