// OurProperties.js
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Editar from "./Editar";
import VerDetalle from "./VerDetalle";

const OurProperties = ({ acciones, enviarDatosModal, setModal, obtenerDatosModal, getModal }) => {
  const [modal, setModal] = useState(false);
  const [modale, getModal] = useState(false);

  const renderOurProperties = () => {
    return (
      <div className="divCards">
        {acciones.map((f) => (
          <Card key={f.id}>
            {/* ... existing code */}
          </Card>
        ))}
        {modal && <Editar modal={enviarDatosModal} setModal={setModal} />}
        {modale && <VerDetalle modale={obtenerDatosModal} getModal={getModal} />}
      </div>
    );
  };

  return <>{renderOurProperties()}</>;
};

export default OurProperties;
