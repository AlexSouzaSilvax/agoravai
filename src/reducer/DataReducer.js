const INITIAL_STATE = {
    all: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUEST_API':
            console.log('OBJ NO REDUCERS: ', action.payload.data.data)
            return {
                ...state,
                all: action.payload.data.data
            }
        case 'ATUALIZA_NOME':
            return {
                ...state,
                all: [{
                    id: action.payload.id,
                    img: action.payload.nome,
                    nome: action.payload.nome,
                    cor: action.payload.nome,
                    ano: action.payload.nome,
                    fabricante: action.payload.nome,
                    valor: action.payload.nome,
                }]
            }
        default:
            return {
                ...state
            };
    }
};