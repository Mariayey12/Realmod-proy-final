import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato1 } from "../../Firebase/firebaseConfig";
import { typesFeactures} from "../types/types";



//-------------agregar---------------//
export const addFeacturedAsync = (feactured) => {
    console.log(feactured);
    return (dispatch) => {
        addDoc(collection(baseDato1, "FeacturesBD"), feactured)
            .then(resp => {
                dispatch(addFeacturedSync(feactured))
                Swal.fire({
                    position:'center',
                    icon: 'success',
                    title: 'feactured Agregada Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addFeacturedSync = (feactured) => {
    return {
        type: typesFeactures.addFeactured,
        payload: feactured
    }
}


//---------------listar----------------//
export const listaAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato1, "FeacturesBD"))
        const feactured = []
        colleccionTraer.forEach((doc) => {
            feactured.push({
                ...doc.data()
            })
        })
        dispatch(listaSync(feactured))
    }
}

export const listaSync = (feactured) => {
    return {
        type: typesFeactures.listFeactured,
        payload: feactured
    }

}

//---------------------Editar-----------//
export const editAsync = (ids, feactured) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato1, "FeacturesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato1, "FeacturesBD", id)

        await updateDoc(documenRef, feactured)
            .then(resp => {
                dispatch(editSync(feactured))
                dispatch(listaAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editSync = (feactured) => {
    return {
        type: typesFeactures.editarFeactured,
        payload: feactured
    }

}

//---------------------Ver-----------//
export const verAsync = (ids, feactured) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato1, "FeacturesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato1, "FeacturesBD", id)

        await updateDoc(documenRef, feactured)
            .then(resp => {
                dispatch(verSync(feactured))
                dispatch(listaAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const verSync = (feactured) => {
    return {
        type: typesFeactures.verFeactured,
        payload: feactured
    }

}






//-------------------delete--------------------//
export const deleterAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato1, "FeacturesBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato1, "FeacturesBD", docum.id))
        }))
        dispatch(deleterSync(id))
    }
}

export const deleterSync = (id) => {
    console.log(id);
    return {
        type: typesFeactures.deleteFeactured,
        payload: id
    }

}