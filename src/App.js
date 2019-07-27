import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/libraryList';
import { Header } from './components/common';

const App = () => {
    return(
        <Provider store={createStore(reducers)} >
            <View>
                <StatusBar backgroundColor="#1A237E" barStyle="light-content" />
                <Header headerText={'Tech Stack'} />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;