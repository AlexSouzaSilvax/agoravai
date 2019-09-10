import React from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { atualizaId, atualizaNome } from './action';

class Detalhe extends React.Component {

    constructor(props) {
        super(props);
        this.atualizaNome = this.atualizaNome.bind(this);
        this.atualizaId = this.atualizaId.bind(this);
    }

    atualizaNome(nome) {
        console.log('Nome: ' + nome);
        const id = this.props.all[0].id;
        console.log('ID: ', id);
        this.props.atualizaNome(id, nome);
    }

    atualizaId(id) {
        console.log('ID: ' + id);
        const nome = this.props.all[0].nome;
        console.log('NOME: ', nome);
        this.props.atualizaNome(id, nome);
    }

    render() {

        const carros = this.props.all.map(i => (
            <View>
                <Text>ID: {i.id} - NOME: {i.nome}</Text>
            </View>
        ));

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {carros}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        all: state.dataReducer.all,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ atualizaId, atualizaNome }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalhe);                                                            