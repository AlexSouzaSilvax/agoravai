export const alimentaRedux = (data) => {
    console.log('OBJ NO ACTION: ', data.data);
    return {
        type: 'REQUEST_API',
        payload: {
            data: data
        }
    }
}

export const atualizaId = (id) => {
    return {
        type: 'ATUALIZA_NOME',
        payload: {
            id: id
        }
    }
};

export const atualizaNome = (nome) => {
    return {
        type: 'ATUALIZA_NOME',
        payload: {
            nome: nome
        }
    }
};