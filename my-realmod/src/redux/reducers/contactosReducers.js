import { typesContactos } from "../types/types";

const initialState = {
    contactos: []
}

export const feacturesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesContactos.addContacto:
            return {
                contactos: [action.payload]
            }
        case typesContactos.listContacto:

            return {
                contactos: [...action.payload]
            }

        case typesContactos.editarContacto:
            return {
                ...state
            }
            case typesContactos.verContacto:
                return {
                    ...state
                }

        case typesContactos.deleteContacto:
            return {
                ...state,
                feactures: state.contactos.filter(prod => prod.id !== action.payload)
            }

        default:
            return state
    }
}