import { typesRegister} from '../types/types'

const initialState = {
    register: []
}

export const registerReducers = (state =initialState , action) =>{
 switch (action.type) {
     case typesRegister.register:
        return{
            nombre: action.payload.nombre,
            email: action.payload.email,
            password: action.payload.password
            
        }
 
     default:
        return state 
        
 }
}