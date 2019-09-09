import React from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableHighlight
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import axios from 'axios';

import { alimentaRedux, atualizaId, atualizaNome } from './action';

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.alimentaRedux = this.alimentaRedux.bind(this);
        this.atualizaNome = this.atualizaNome.bind(this);
        this.atualizaId = this.atualizaId.bind(this);
    }

    alimentaRedux(data) {
        console.log('Data: ' + data.data);
        this.props.alimentaRedux(data);
    }

    atualizaId(id) {
        console.log('ID: ' + id);
        this.props.atualizaNome(id);
    }

    atualizaNome(nome) {
        console.log('Nome: ' + nome);
        this.props.atualizaNome(nome);
    }

    async componentDidMount() {
        await axios.get('https://driver-now.herokuapp.com/carros')
            .then((response) => {
                console.log("Lista de carros: ", response.data)
                this.alimentaRedux(response);
            }).catch((err) => {
                console.log("Erro ao listar carros: ", err)
                console.log("Nenhum carro foi encontrado");
            })
    }

    render() {

        const carros = this.props.all.map(i => (
            <View>
                <Text key={i.id}>{i.id} - {i.nome}</Text>

                <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                    onChangeText={this.atualizaid}
                    value={i.id} />

                <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                    onChangeText={this.atualizaNome}
                    value={i.nome} />
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
    return bindActionCreators({ alimentaRedux, atualizaId, atualizaNome }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);