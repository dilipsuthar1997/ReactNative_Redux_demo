import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ItemLibrary from './itemLibrary';

class LibraryList extends Component {

    renderLibraryList(library) {
        return <ItemLibrary library={library.item} />;
    }

    render() {

        console.log(this.state);

        return(
            <FlatList 
                data = {this.props.libraries}
                renderItem = {this.renderLibraryList}
                keyExtractor = {library => library.id}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);