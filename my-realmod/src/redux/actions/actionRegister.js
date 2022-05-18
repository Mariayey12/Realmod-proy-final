
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesRegister } from "../types/types"


export const RegisterAsyncronico = (nombre, correo, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, correo, password)
            .then(async({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, {displayName: nombre})
                dispatch(RegisterSincronico(nombre, correo, password ))
                console.log('Usuario Agregado')

            })

            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}


export const RegisterSincronico = (nombre, correo, password) => {
    return {
        type: typesRegister.register,
        payload: {
            nombre,
            correo,
            password
        }
    }

}