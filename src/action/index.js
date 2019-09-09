export const alimentaRedux = (data) => {
    console.log('OBJ NO ACTION: ', data.data);
    return {
        type: 'REQUEST_API',
        payload: {
            data: data
        }
    }
}

export const atualizaNome = (id,nome) => {
    return {
        type: 'ATUALIZA_NOME',
        payload: {            
            id: id,
            nome: nome
        }
    }
};