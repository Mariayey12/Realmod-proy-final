import logo from "../image/Logo.png";
import "../style/App.css";
import { Link, useNavigate } from "react-router-dom";
import "../style/landingPage.css";
import { useEffect } from "react";
import { Accordion, Button, Card, Carousel } from "react-bootstrap";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate.push("/home");
    }, 5000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo container-logo" alt="logo" />
        <li className="item_nav">
          <Link to="/login"> Acerca de</Link>
        </li>
      </header>
      <b></b> <h1>Tu nuevo comienzo con Realmond</h1>
      <p  style={{ width: "50rem", margin: "auto" }}>
          
      <center>  Creamos Realmond con la misión de poder arrendar,Rentar y vender
        propiedades rápido, seguro y online.</center> 
      </p>
      <h1>
        <p>
          <b></b>
          <center>“Nuestro propósito es democratizar y transformar esta industria a algo
          accesible, agradable y fácil, brindándole acceso a todo el mundo a su
          hogar soñado, incluso a los que no pueden.”</center> 
        </p>
      </h1>
      <h3>¿Qué nos mueve?</h3>
      <center>
        {" "}
        <p>
          <b></b>A medida que avanza nuestro sueño de transformar esta
          industria, sentimos la necesidad de dejar claros nuestros principios y
          comunicarlos en cada etapa de nuestros procesos. Nuestros valores de
          comunidad representan tres principios básicos que reflejamos en
          nuestro servicio
        </p>
      </center>
      <h3>Seguro</h3>
      <center>
        {" "}
        <p>
          <b></b>
          Buscar un nuevo hogar o decidir arrendar o vender una propiedad, es un
          momento importante de la vida y no es una decisión que se toma a la
          ligera. Existe un mercado informal y de poca tecnología en
          Latinoamérica que Realmond quiere transformar entregando una
          plataforma de confianza y un servicio seguro y rápido respaldado por
          expertos que acompañan durante todo el proceso.
        </p>
      </center>
      <h3>Inclusivo</h3>
      <center>
        {" "}
        <p>
          <b></b>
          En Realmond no toleramos la discriminación de ningún tipo. Creemos que
          todos merecen el hogar de sus sueños y por eso buscamos crear una
          comunidad en donde todos se sientan bien, cómodos y respetados
          obteniendo nada más que buenas experiencias.
        </p>
      </center>
      <h4>Accesible</h4>
      <center>
        {" "}
        <p>
          <b></b>
          Hoy en día existen muchas barreras para lograr arrendar o comprar una
          propiedad. En Houm queremos eliminarlas y asesorar en todo el camino a
          nuestros clientes, simplificándoles la vida sin pedir aval, haciendo
          todo online, rápido y brindándoles guía
        </p>
      </center>
      <h1>
        <Card style={{ width: "50rem", margin: "auto" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>¿Por qué Realmond?</h1>
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/academiageek1/image/upload/v1652838953/product-realmod/Realmod.png"
              style={{ width: "10rem", margin: "auto" }}
            />
            <Card.Subtitle className="mb-4 text-muted">
              <h3>Tu lugar soñado</h3>
            </Card.Subtitle>
            <Card.Text>
              <h4>
                {" "}
                <b>
                  <center>
                    {" "}
                    Queremos hacerle la vida más fácil y segura tanto a los
                    dueños de casas , apartamentos o locales comercial, como a
                    las personas que buscan su hogar soñado, en una de las
                    decisiones que tienen más impacto en sus finanzas y vida,
                    democratizando la industria inmobiliaria. Esto lo logramos a
                    través de un servicio digital, seguro y eficiente,
                    apalancado de la economía colaborativa. Gracias a esto,
                    eliminamos los papeleos, la burocracia y procesos lentos.
                  </center>
                </b>
              </h4>
            </Card.Text>
            <Button>
              <Card.Link href="http://localhost:3000/">Ir a </Card.Link>
            </Button>
          </Card.Body>
        </Card>
      </h1>
      <h1>Quienes somos?</h1>
      <>
        <Card style={{ width: "50rem", margin: "auto" }}>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1653207851/product-realmod/h5wfya5yvd6exlmmzxj7.jpg"
          />
          <Card.Body>
            <Card.Text>
              <h4>
                {" "}
                <b>
                  <center>
                    {" "}
                    Realmon está presente en California,Abilene, Kansa,
                    Poughhkee, NY, y fue fundado el año 2016 por Benjamín Labra
                    (CEO) y Nicolás Knockaert (COO). Ellos vieron una gran
                    oportunidad en la industria inmobiliaria, de poder aportar
                    con innovación, reinventando una de las transacciones más
                    importantes en la vida de las personas con una plataforma
                    radicalmente simple y fácil, ayudando a miles de personas a
                    invertir, arrendar, administrar y vender propiedades. Para
                    democratizar esta industria, Houm ha desarrollado e
                    introducido todas las herramientas tecnológicas, financieras
                    y operacionales al negocio. Gracias a ese servicio integral
                    y la tecnología, Houm permite hacer los procesos hasta 10
                    veces más rápido y de manera segura y online, permitiendo
                    hacer miles de transacciones al mes y seguir creciendo y
                    expandiéndose a nuevas ciudades, respaldados por grandes
                    inversionistas de alrededor del mundo.{" "}
                  </center>
                </b>
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <b>
        {" "}
        <h1>Testimonio de Personas que encontraron su hogar soñado</h1>
      </b>
      <b>
        <Carousel variant="black" style={{ width: "40rem", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/academiageek1/image/upload/v1653210618/product-realmod/kp2xrxtgfeopdlkumg0g.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Patricia Sánchez</h3>
              <p>
                <h5>
                  {" "}
                  Mi experiencia fue excelente gracias a Dios. El Houmer muy
                  atento y pendiente de todos los detalles. Y todo fue súper
                  rápido, desde la firma online hasta la entrega de las llaves
                  del apartamento. ¡Gracias por su atención!.
                </h5>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://res.cloudinary.com/academiageek1/image/upload/v1652838153/product-realmod/propie.png" alt="Second slide" />
            <Carousel.Caption>
              <h3>Javier Rodriguez</h3>
              <p><h5>
                “Demoraron menos de 24 horas en contactarme y pude agendar una
                visita virtual donde el Houmer resolvió todas mis dudas. No
                piden codeudor e hice todo el proceso online y seguro, hasta el
                contrato, el cual es súper claro y amigable. Pude realizar todo
                desde la comodidad de mi computador, ¡El trámite de buscar y
                arrendar no duró más de 3 días! Gracias Houm por ser una
                solución y ayuda en este proceso tan importante para las
                personas”.</h5>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://res.cloudinary.com/academiageek1/image/upload/v1652838160/product-realmod/AgMac.William.png" alt="Third slide" />
            <Carousel.Caption>
              <h3>César Oviedo</h3>
              <p>
                <h5>
                  “Son un equipo genial. Hace poco arrendé con ustedes y de
                  verdad que me ayudaron mucho para encontrar el lugar ideal
                  para mi. Como persona con discapacidad, siempre es complicado
                  el proceso de conseguir un apartamento e hicieron lo posible
                  para que las cosas se dieran. Todo es seguro, ¡Desde el primer
                  contacto hasta los pagos mensuales! Gracias por el apoyo”
                </h5>{" "}
                .
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </b>
     <h1>¡Contáctanos!</h1>


     <div>

         <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652838929/product-realmod/Footer-1.png" alt="Footer" style={{ width: "70rem", margin: "auto" }} />
     </div>
    </div>
  );
};

export default About;
