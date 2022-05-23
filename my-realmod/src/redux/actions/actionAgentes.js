import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato3 } from "../../Firebase/firebaseConfig";
import { typesAgentes } from "../types/types";



//-------------agregarAgente---------------//
export const addAgenteAsync = (agente) => {
    console.log(agente);
    return (dispatch) => {
        addDoc(collection(baseDato3, "AgentesBD"), agente)
            .then(resp => {
                dispatch(addAgenteSync(agente))
                Swal.fire({
                    position:'center',
                    icon: 'success',
                    title: 'Agente Agregado Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addAgenteSync = (agente) => {
    return {
        type: typesAgentes.addAgente,
        payload: agente
    }
}


//---------------listarAgente----------------//
export const listarAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato3, "AgentesBD"))
        const agente = []
        colleccionTraer.forEach((doc) => {
            agente.push({
                ...doc.data()
            })
        })
        dispatch(listarSync(agente))
    }
}

export const listarSync = (agente) => {
    return {
        type: typesAgentes.listAgente,
        payload: agente
    }

}

//---------------------EditarAgente-----------//
export const editAsync = (ids, agente) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato3, "AgentesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato3, "AgentesBD", id)

        await updateDoc(documenRef, agente)
            .then(resp => {
                dispatch(editSync(agente))
                dispatch(listarAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editSync = (agente) => {
    return {
        type: typesAgentes.editarAgente,
        payload: agente
    }

}

//---------------------VerAgente-----------//
export const verAsync = (ids, agente) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato3, "AgentesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato3, "AgentesBD", id)

        await updateDoc(documenRef, agente)
            .then(resp => {
                dispatch(verSync(agente))
                dispatch(listarAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const verSync = (agente) => {
    return {
        type: typesAgentes.verAgente,
        payload: agente
    }

}

//-------------------delete--------------------//
export const deletAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato3, "AgentesBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato3, "AgentesBD", docum.id))
        }))
        dispatch(deletSync(id))
    }
}

export const deletSync = (id) => {
    console.log(id);
    return {
        type: typesAgentes.deleteAgente,
        payload: id
    }

}