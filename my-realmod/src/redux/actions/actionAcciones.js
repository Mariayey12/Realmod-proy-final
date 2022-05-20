import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesAcciones } from "../types/types";



//-------------agregar---------------//
export const addPropiedadAsync = (propiedad) => {
    console.log(propiedad);
    return (dispatch) => {
        addDoc(collection(baseDato, "PropiedadesBD"), propiedad)
            .then(resp => {
                dispatch(addPropiedadSync(propiedad))
                Swal.fire({
                    position:'center',
                    icon: 'success',
                    title: 'Propiedad Agregada Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addPropiedadSync = (propiedad) => {
    return {
        type: typesAcciones.addPropiedad,
        payload: propiedad
    }
}


//---------------listar----------------//
export const listAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "PropiedadesBD"))
        const propiedad = []
        colleccionTraer.forEach((doc) => {
            propiedad.push({
                ...doc.data()
            })
        })
        dispatch(listSync(propiedad))
    }
}

export const listSync = (propiedad) => {
    return {
        type: typesAcciones.listPropiedad,
        payload: propiedad
    }

}

//---------------------Editar-----------//
export const editAsync = (ids, propiedad) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "PropiedadesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "PropiedadesBD", id)

        await updateDoc(documenRef, propiedad)
            .then(resp => {
                dispatch(editSync(propiedad))
                dispatch(listAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editSync = (propiedad) => {
    return {
        type: typesAcciones.editarPropiedad,
        payload: propiedad
    }

}

//---------------------Ver-----------//
export const verAsync = (ids, propiedad) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "PropiedadesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "PropiedadesBD", id)

        await updateDoc(documenRef, propiedad)
            .then(resp => {
                dispatch(verSync(propiedad))
                dispatch(listAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const verSync = (propiedad) => {
    return {
        type: typesAcciones.verPropiedad,
        payload: propiedad
    }

}






//-------------------delete--------------------//
export const deleteAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "PropiedadesBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "PropiedadesBD", docum.id))
        }))
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    console.log(id);
    return {
        type: typesAcciones.deletePropiedad,
        payload: id
    }

}