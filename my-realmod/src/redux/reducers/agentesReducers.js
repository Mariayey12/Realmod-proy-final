import { typesAgentes } from "../types/types";

const initialState = {
    agentes: []
}

export const agentesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesAgentes.addAgente:
            return {
                agentes: [action.payload]
            }
        case typesAgentes.listAgente:

            return {
                agentes: [...action.payload]
            }

        case typesAgentes.editarAgente:
            return {
                ...state
            }
            case typesAgentes.verAgente:
                return {
                    ...state
                }

        case typesAgentes.deleteAgente:
            return {
                ...state,
                feactures: state.agentes.filter(prod => prod.id !== action.payload)
            }

        default:
            return state
    }
}