import { typesAcciones } from "../types/types";

const initialState = {
    acciones: []
}

export const accionesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesAcciones.addPropiedad:
            return {
                acciones: [action.payload]
            }
        case typesAcciones.listPropiedad:

            return {
                acciones: [...action.payload]
            }

        case typesAcciones.editarPropiedad:
            return {
                ...state
            }
            case typesAcciones.verPropiedad:
                return {
                    ...state
                }

        case typesAcciones.deletePropiedad:
            return {
                ...state,
                acciones: state.acciones.filter(prod => prod.id !== action.payload)
            }

        default:
            return state
    }
}