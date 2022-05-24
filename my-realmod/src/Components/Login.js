import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginEmailPassAsync, loginGoogle,loginFacebook } from "../redux/actions/actionLogin";
import "../style/Login.css";
import logo from '../image/Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("El texto ingresado debe ser de tipo pepito@gmail.com")
    .min(5, "Email muy corto, ingresa un email mas largo")
    .max(50, "El email excede el maximo de caracteres permitidos")
    .required("El campo email es requerido"),
  password: Yup.string()
    .min(5, "contraseña muy corta")
    .max(10, "contraseña muy larga")
    .required("El campo contraseña es requerido"),
});

const Login = () => {
  const dispatch = useDispatch();

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div className="divLogin">
      
      <div className="logoLogin">
        <img src={logo} alt='logo' />
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(loginEmailPassAsync(values.email, values.password));
          Form.reset();
        }}
      >

        {({ errors, touched }) => (
          <Form className="formLogin">
            <h1>Iniciar sesión</h1>
            <Field name="email" type="email" placeholder='Ingresa tu Correo' className="field" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              placeholder='Ingrese su Contraseña'
              name="password"
              type="password"
              className="field" /* values={nombre} onChange={handleInputChange} */
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}


            <div className="divGoogle" onClick={() => handleLoginGoogle()}>
              <button type="submit" className="google">
                <FcGoogle/>
                Ingresar con Google
              </button>
            </div>

            <div className="divFacebook"  onClick={() => handleLoginFacebook()}>
              <button type="submit" className="facebook">
                <FaFacebookF/>
                Ingresar con Facebook
              </button>
            </div>
            <div className="btn-login">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>

          </Form>
        )}
      </Formik>

      <hr></hr>
      <p className="Ir-registro">
        ¿Ya tienes cuenta?
        <Link className="link" to="/registro">
          Creala Ya!
        </Link>
      </p>
    </div>
  );
};

export default Login;