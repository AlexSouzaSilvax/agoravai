import React from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { alteraNome, alteraCor } from './action';

class Detalhe2 extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titulo', 'Detalhe'),
        };
    };

    constructor(props) {
        super(props);
        this.alteraNome = this.alteraNome.bind(this);
        this.alteraCor = this.alteraCor.bind(this);
    }

    componentDidMount() {
        console.log(`TELA DETALHE ITEM_SELECIONADO: ` + this.props.itemSelecionado.id + ' - ' + this.props.itemSelecionado.nome);
    }

    //metodo abaixo "atualiza" o campo nome com o valor do input da view direto no redux, os abaixo tbm tem a mesma funçao
    alteraNome(nome) {
        console.log('Nome alterado: ' + nome);
        this.props.alteraNome(nome);
    }
    alteraCor(cor) {
        console.log('COR alterado: ' + cor);
        this.props.alteraCor(cor);
    }

    render() {

        return (
            <View style={{ padding: 25, margin: 5 }}>
                <Text>Nome: {this.props.itemSelecionado.nome}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.nome} onChangeText={this.alteraNome} />
                <Text>Id: {this.props.itemSelecionado.id}</Text>
                <Text>Cor: {this.props.itemSelecionado.cor}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.cor} onChangeText={this.alteraCor} />
                <Text>Ano: {this.props.itemSelecionado.ano}</Text>
                <Text>Img: {this.props.itemSelecionado.img}</Text>
                <Text>Valor: {this.props.itemSelecionado.valor}</Text>
                <Text>Fabricante: {this.props.itemSelecionado.fabricante}</Text>
                <Text />
                <Button title='Pega OBJ' onPress={() => { console.log('\n\nOBJ ALTERADO: ', this.props.itemSelecionado); }} />
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
    return bindActionCreators({ alteraNome, alteraCor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalhe2);