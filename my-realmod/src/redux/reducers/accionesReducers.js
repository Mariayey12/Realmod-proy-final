import { typesAcciones } from "../types/types";

const initialState = {
    acciones: []
}

export const accionesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesAcciones.addFrase:
            return {
                acciones: [action.payload]
            }
        case typesAcciones.listFrase:

            return {
                acciones: [...action.payload]
            }

        case typesAcciones.editarFrase:
            return {
                ...state
            }

        case typesAcciones.deleteFrase:
            return {
                ...state,
                acciones: state.acciones.filter(p => p.id !== action.payload)
            }

        default:
            return state
    }
}