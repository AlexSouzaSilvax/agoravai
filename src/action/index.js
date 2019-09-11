export const alimentaRedux = (data) => {
    console.log('OBJ NO ACTION: ', data.data);
    return {
        type: 'REQUEST_API',
        payload: {
            data: data
        }
    }
}

export const itemSelecionado = (item) => {
    return {
        type: 'ITEM_SELECIONADO',
        payload: {
            item: item
        }
    }
};

export const alteraNome = (nome) => {
    return {
        type: 'ALTERA_NOME',
        payload: {
            nome: nome
        }
    }
}

export const alteraId = (id) => {
    return {
        type: 'ALTERA_ID',
        payload: {
            id: id
        }
    }
}

export const alteraCor = (cor) => {
    return {
        type: 'ALTERA_COR',
        payload: {
            cor: cor
        }
    }
}

export const alteraAno = (ano) => {
    return {
        type: 'ALTERA_ANO',
        payload: {
            ano: ano
        }
    }
}

export const alteraImg = (img) => {
    return {
        type: 'ALTERA_IMG',
        payload: {
            img: img
        }
    }
}
export const alteraValor = (valor) => {
    return {
        type: 'ALTERA_VALOR',
        payload: {
            valor: valor
        }
    }
}

export const alteraFabricante = (fabricante) => {
    return {
        type: 'ALTERA_FABRICANTE',
        payload: {
            fabricante: fabricante
        }
    }
}