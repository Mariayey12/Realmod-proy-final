import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {google } from "../../Firebase/firebaseConfig";
import { typesLogin } from "../types/types"

//-----------asyncronoGoogle--------------//
export const loginGoogle = ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
       .then(({user})=>{
            dispatch(loginSincronico(user.email, user.password))
            console.log(user, 'Usuario autorizado')
    })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
}

export const loginEmailPassAsync = (email, password)=>{
    return(dispatch)=>{
    const auth = getAuth()
    console.log(auth); 
    signInWithEmailAndPassword(auth, email, password)
    .then(({user})=>{
            dispatch(loginSincronico(user.email, user.password))
            console.log('Usuario autorizado')
    })

    .catch(error=>{
        console.warn(error, 'No autorizado')
    })

    }
}

export const loginSincronico = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email,
            password
        }
    }

}

//--------------------Logout----------------------

export const logoutAsync = ()=>{
    return(dispatch)=>{
        const auth= getAuth()
        signOut(auth)
        .then(({user})=>{
            dispatch(logoutSync())
            console.log('Adios')
      })
          .catch(error=>{
              console.warn(error)
          })
      }
  }

export const logoutSync = ()=>{
    return{
        type: typesLogin.logout
    }
}


