import React from "react";
import { Button, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store';
import Data from './Data';

class Detalhe extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Data />
                </View>
            </Provider>
        );
    }
}

export default Detalhe;