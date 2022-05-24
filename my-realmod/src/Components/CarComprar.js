import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addFormikAsync} from '../redux/actions/actionPlantas';

//----------------Validacion de cada input -----------
const SignupSchema = Yup.object().shape({
    nombre: Yup.string().min(2, 'El nombre muy corto').max(50, 'excede el maximo').required('El nombre campo es obligatorio'),
    email:Yup.string().email('debe ser de tipo email ana@gmail.com').min(5, 'email muy corto').max(50, 'excede el maximo').required('El email campo es obligatorio'),
    pass:Yup.string().min(5, 'muy corta').max(10, 'muy larga').required('el password es obligatorio').oneOf([Yup.ref('pass2')], 'Los password no coinciden'),
    pass2:Yup.string().min(5, 'muy corta').max(10,'muy larga').required('el password es obligatorio').oneOf([Yup.ref('pass')], 'Los Password no coinciden')
});


export const FormularioUsuario = () => {
    const dispatch = useDispatch()
return(
    <div>
        
    <Formik
        initialValues={
            {
                nombre: '',
                email: '',
                pass: '',
                pass2:''
            }
         }
        validationSchema={SignupSchema}
        onSubmit={values => {
                       dispatch(addFormikAsync(values))
                       
        }}
    >
        {({errors, touched, handleReset}) => (
            <Form 
            style={{
                margin:"20%",
                textAlign:"center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent:"center",
               
                }}>
                <h1>Registro de Usuario con Formik y Yup</h1>
            <Field name="nombre" placeholder="Nombre" type="text" style={{margin:"2%"}}/>
            {errors.nombre && touched.nombre ? 
            (<div>{errors.nombre}</div>) : null}

            <Field name="email" placeholder="Email" type="email" style={{margin:"2%"}}/>
            {errors.email && touched.email ? 
            (<div>{errors.email}</div>) : null}

            <Field name="pass" placeholder="Password" type="password"style={{margin:"2%"}} />
            {errors.pass && touched.pass ? 
            (<div>{errors.pass}</div>) : null}


            <Field name="pass2" placeholder="Repetir Password" type="password" style={{margin:"2%"}} />
            {errors.pass2 && touched.pass2 ? 
            (<div>{errors.pass2}</div>) : null}

            <button type="submit" style={{margin:"2%", borderColor:"blue"}}>Enviar</button>
            <button type="submit" style={{margin:"2%", borderColor:"blue"}} onClick={handleReset}>Limpiar</button>
           </Form>

        )}
     

    </Formik>
</div>
)
   
};

