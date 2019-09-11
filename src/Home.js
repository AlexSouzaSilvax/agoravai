import React from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import axios from 'axios';

import { alimentaRedux, itemSelecionado } from './action';

class Data extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.alimentaRedux = this.alimentaRedux.bind(this);
    }

    alimentaRedux(data) {
        this.props.alimentaRedux(data);
    }

    itemSelecionado = (i) => {
        this.props.itemSelecionado(i);
    }

    async componentDidMount() {
        await axios.get('https://driver-now.herokuapp.com/carros')
            .then((response) => {
                console.log("Lista de carros: ", response.data)
                this.alimentaRedux(response);
                this.setState({ loading: false });
            }).catch((err) => {
                console.log("Erro ao listar carros: ", err)
                console.log("Nenhum carro foi encontrado");
            })
    }

    render() {

        const carros = this.props.all.map(i => (
            <View key={i.id}>
                <Button title={i.nome} onPress={() => {
                    this.itemSelecionado(i);
                    this.props.navigation.navigate('Detalhe', { titulo: i.nome});
                }}></Button>
                <Text />
            </View>
        ));

        if (this.state.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Carregando...</Text>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {carros}
                </View>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        all: state.dataReducer.all,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ alimentaRedux, itemSelecionado }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);                                                            