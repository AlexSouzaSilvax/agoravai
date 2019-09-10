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
    }

    componentDidMount() {
        console.log(`TELA DETALHE ITEM_SELECIONADO: ` + this.props.itemSelecionado.nome);
    }

    render() {

        /*const carros = this.props.itemSelecionado.map(i => (
            <View key={i.id}>
                <Text>ID: {i.id} - NOME: {i.nome}</Text>
            </View>
        ));*/// {carros}

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Eu confio em você, vai lá filhãooooo.</Text>
                <Text>{this.props.itemSelecionado.nome}</Text>
                <Text>{this.props.itemSelecionado.id}</Text>
                <Text>{this.props.itemSelecionado.cor}</Text>
                <Text>{this.props.itemSelecionado.ano}</Text>
                <Text>{this.props.itemSelecionado.img}</Text>
                <Text>{this.props.itemSelecionado.valor}</Text>
                <Text>{this.props.itemSelecionado.fabricante}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemSelecionado: state.dataReducer.itemSelecionado,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalhe);                                                            