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
        case 'ALTERA_NOME':
            console.log('NOME ALTERADO NO REDUCERS: ', action.payload.nome)
            return {
                ...state,
                itemSelecionado: {
                    id: state.itemSelecionado.id,
                    nome: action.payload.nome,
                    fabricante: state.itemSelecionado.fabricante,
                    cor: state.itemSelecionado.cor,
                    ano: state.itemSelecionado.ano,
                    img: state.itemSelecionado.img,
                    valor: state.itemSelecionado.valor
                }
            }
        case 'ALTERA_ID':
            console.log('NOME ALTERADO NO REDUCERS: ', action.payload.id)
            return {
                ...state,
                itemSelecionado: {
                    id: action.payload.id,
                    nome: state.itemSelecionado.nome,
                    fabricante: state.itemSelecionado.fabricante,
                    cor: state.itemSelecionado.cor,
                    ano: state.itemSelecionado.ano,
                    img: state.itemSelecionado.img,
                    valor: state.itemSelecionado.valor
                }
            }
        case 'ALTERA_COR':
            console.log('COR ALTERADO NO REDUCERS: ', action.payload.cor)
            return {
                ...state,
                itemSelecionado: {
                    id: state.itemSelecionado.id,
                    nome: state.itemSelecionado.nome,
                    fabricante: state.itemSelecionado.fabricante,
                    cor: action.payload.cor,
                    ano: state.itemSelecionado.ano,
                    img: state.itemSelecionado.img,
                    valor: state.itemSelecionado.valor
                }
            }

        case 'ALTERA_ANO':
            console.log('ANO ALTERADO NO REDUCERS: ', action.payload.ano)
            return {
                ...state,
                itemSelecionado: {
                    id: state.itemSelecionado.id,
                    nome: state.itemSelecionado.nome,
                    fabricante: state.itemSelecionado.fabricante,
                    cor: state.itemSelecionado.cor,
                    ano: action.payload.ano,
                    img: state.itemSelecionado.img,
                    valor: state.itemSelecionado.valor
                }
            }
        case 'ALTERA_IMG':
            console.log('IMG ALTERADO NO REDUCERS: ', action.payload.img)
            return {
                ...state,
                itemSelecionado: {
                    id: state.itemSelecionado.id,
                    nome: state.itemSelecionado.nome,
                    fabricante: state.itemSelecionado.fabricante,
                    cor: state.itemSelecionado.cor,
                    ano: state.itemSelecionado.ano,
                    img: action.payload.img,
                    valor: state.itemSelecionado.valor
                }
            }
        case 'ALTERA_VALOR':
            console.log('VALOR ALTERADO NO REDUCERS: ', action.payload.valor)
            return {
                ...state,
                itemSelecionado: {
                    id: state.itemSelecionado.id,
                    nome: state.itemSelecionado.nome,
                    fabricante: state.itemSelecionado.fabricante,
                    cor: state.itemSelecionado.cor,
                    ano: state.itemSelecionado.ano,
                    img: state.itemSelecionado.img,
                    valor: action.payload.valor
                }
            }
        case 'ALTERA_FABRICANTE':
            console.log('FABRICANTE ALTERADO NO REDUCERS: ', action.payload.fabricante)
            return {
                ...state,
                itemSelecionado: {
                    id: state.itemSelecionado.id,
                    nome: state.itemSelecionado.nome,
                    fabricante: action.payload.fabricante,
                    cor: state.itemSelecionado.cor,
                    ano: state.itemSelecionado.ano,
                    img: state.itemSelecionado.img,
                    valor: state.itemSelecionado.valor
                }
            }
        default:
            return {
                ...state
            };
    }
};