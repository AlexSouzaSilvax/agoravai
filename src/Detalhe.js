import React from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { alteraNome, alteraId, alteraCor, alteraAno, alteraImg, alteraValor, alteraFabricante } from './action';

class Detalhe extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titulo', 'Detalhe'),
        };
    };

    constructor(props) {
        super(props);

        this.alteraNome = this.alteraNome.bind(this);
        this.alteraId = this.alteraId.bind(this);
        this.alteraCor = this.alteraCor.bind(this);
        this.alteraAno = this.alteraAno.bind(this);
        this.alteraImg = this.alteraImg.bind(this);
        this.alteraValor = this.alteraValor.bind(this);
        this.alteraFabricante = this.alteraFabricante.bind(this);

    }

    componentDidMount() {
        console.log(`TELA DETALHE ITEM_SELECIONADO: ` + this.props.itemSelecionado.nome);
    }

    alteraNome(nome) {
        console.log('Nome alterado: ' + nome);
        this.props.alteraNome(nome);
    }

    alteraId(id) {
        console.log('ID alterado: ' + id);
        this.props.alteraId(id);
    }
    alteraCor(cor) {
        console.log('COR alterado: ' + cor);
        this.props.alteraCor(cor);
    }
    alteraAno(ano) {
        console.log('ANO alterado: ' + ano);
        this.props.alteraAno(ano);
    }
    alteraImg(img) {
        console.log('IMG alterado: ' + img);
        this.props.alteraImg(img);
    }
    alteraValor(valor) {
        console.log('VALOR alterado: ' + valor);
        this.props.alteraValor(valor);
    }
    alteraFabricante(fabricante) {
        console.log('FABRICANTE alterado: ' + fabricante);
        this.props.alteraFabricante(fabricante);
    }

    render() {

        return (
            <View style={{ padding: 25, margin: 5 }}>
                <Text>Nome: {this.props.itemSelecionado.nome}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.nome} onChangeText={this.alteraNome} />
                <Text>Id: {this.props.itemSelecionado.id}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.id} onChangeText={this.alteraId} />
                <Text>Cor: {this.props.itemSelecionado.cor}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.cor} onChangeText={this.alteraCor} />
                <Text>Ano: {this.props.itemSelecionado.ano}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.ano} onChangeText={this.alteraAno} />
                <Text>Img: {this.props.itemSelecionado.img}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.img} onChangeText={this.alteraImg} />
                <Text>Valor: {this.props.itemSelecionado.valor}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.valor} onChangeText={this.alteraValor} />
                <Text>Fabricante: {this.props.itemSelecionado.fabricante}</Text>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} value={this.props.itemSelecionado.fabricante} onChangeText={this.alteraFabricante} />
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
    return bindActionCreators({ alteraNome, alteraId, alteraCor, alteraAno, alteraImg, alteraValor, alteraFabricante }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalhe);