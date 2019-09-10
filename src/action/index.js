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
