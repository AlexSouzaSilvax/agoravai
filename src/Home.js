import React, { Component } from "react";
import { StyleSheet, Button, View } from "react-native";
import { Provider } from 'react-redux'
import { store } from './store';

import Data from './Data';

class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Data />                    
                </View>
                <Button title='Tela Detalhe' onPress={() => { this.props.navigation.navigate('Detalhe') }}></Button>
            </Provider>
        );
    }
}

export default App;