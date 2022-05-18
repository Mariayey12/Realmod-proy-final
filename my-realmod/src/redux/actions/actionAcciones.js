import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesAcciones } from "../types/types";



//-------------agregar---------------//
export const addFraseAsync = (frase) => {
    console.log(frase);
    return (dispatch) => {
        addDoc(collection(baseDato, "fraseBD"), frase)
            .then(resp => {
                dispatch(addFraseSync(frase))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'frase Agregada Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addFraseSync = (frase) => {
    return {
        type: typesAcciones.addFrase,
        payload: frase
    }
}


//---------------listar----------------//
export const listAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "fraseBD"))
        const frase = []
        colleccionTraer.forEach((doc) => {
            frase.push({
                ...doc.data()
            })
        })
        dispatch(listSync(frase))
    }
}

export const listSync = (frase) => {
    return {
        type: typesAcciones.listFrase,
        payload: frase
    }

}

//---------------------Editar-----------//
export const editAsync = (ids, frase) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "fraseBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "fraseBD", id)

        await updateDoc(documenRef, frase)
            .then(resp => {
                dispatch(editSync(frase))
                dispatch(listAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editSync = (frase) => {
    return {
        type: typesAcciones.editarFrase,
        payload: frase
    }

}



//-------------------delete--------------------//
export const deleteAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "fraseBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "fraseBD", docum.id))
        }))
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    console.log(id);
    return {
        type: typesAcciones.deleteFrase,
        payload: id
    }

}