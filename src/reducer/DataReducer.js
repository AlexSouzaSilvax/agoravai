const INITIAL_STATE = {
    all: [],
    itemSelecionado: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUEST_API':
            console.log('OBJ NO REDUCERS: ', action.payload.data.data)
            return {
                ...state,
                all: action.payload.data.data
            }
        case 'ITEM_SELECIONADO':
            console.log('ITEM_SELECIONADO REDUCERS: ', action.payload.item)
            return {
                ...state,
                itemSelecionado: action.payload.item                
            }
        default:
            return {
                ...state
            };
    }
};