import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato2 } from "../../Firebase/firebaseConfig";
import { typesContactos } from "../types/types";



//-------------agregarContacto---------------//
export const addContactoAsync = (contacto) => {
    console.log(contacto);
    return (dispatch) => {
        addDoc(collection(baseDato2, "ContactosBD"),contacto)
            .then(resp => {
                dispatch(addContactoSync(contacto))
                Swal.fire({
                    position:'center',
                    icon: 'success',
                    title: 'Contacto Agregado Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addContactoSync = (contacto) => {
    return {
        type: typesContactos.addContacto,
        payload: contacto
    }
}


//---------------listarContacto----------------//
export const listAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato2, "ContactosBD"))
        const contacto = []
        colleccionTraer.forEach((doc) => {
            contacto.push({
                ...doc.data()
            })
        })
        dispatch(listSync(contacto))
    }
}

export const listSync = (contacto) => {
    return {
        type: typesContactos.listContacto,
        payload: contacto
    }

}

//---------------------EditarContacto-----------//
export const editAsync = (ids, contacto) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato2, "ContactosBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato2, "ContactosBD", id)

        await updateDoc(documenRef, contacto)
            .then(resp => {
                dispatch(editSync(contacto))
                dispatch(listAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editSync = (contacto) => {
    return {
        type: typesContactos.editarContacto,
        payload: contacto
    }

}

//---------------------VerContacto-----------//
export const verAsync = (ids, contacto) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato2, "ContactosBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato2, "ContactosBD", id)

        await updateDoc(documenRef, contacto)
            .then(resp => {
                dispatch(verSync(contacto))
                dispatch(listAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const verSync = (contacto) => {
    return {
        type: typesContactos.verContacto,
        payload: contacto
    }

}
//-------------------deleteContacto--------------------//
export const deleteAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato2, "ContactosBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato2, "ContactosBD", docum.id))
        }))
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    console.log(id);
    return {
        type: typesContactos.deleteContacto,
        payload: id
    }

}