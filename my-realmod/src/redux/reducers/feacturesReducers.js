import { typesFeactures } from "../types/types";

const initialState = {
    acciones: []
}

export const feacturesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesFeactures.addFeactured:
            return {
                feactures: [action.payload]
            }
        case typesFeactures.listFeactured:

            return {
                feactures: [...action.payload]
            }

        case typesFeactures.editarFeactured:
            return {
                ...state
            }
            case typesFeactures.verFeactured:
                return {
                    ...state
                }

        case typesFeactures.deleteFeactured:
            return {
                ...state,
                feactures: state.feactures.filter(prod => prod.id !== action.payload)
            }

        default:
            return state
    }
}