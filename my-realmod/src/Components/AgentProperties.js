// AgentProperties.js
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import EdiAgente from "./EdiAgente";
import VerAgente from "./VerAgente";

const AgentProperties = ({ agentes, enviarDatosModal3, setModal3, obtenerDatosModal3, getModal1 }) => {
  const [modal3, setModal3] = useState(false);
  const [modale1, getModal1] = useState(false);

  const renderAgentProperties = () => {
    return (
      <div className="divCards3">
        {agentes?.map((fa) => (
          <Card key={fa.id}>
            {/* ... existing code */}
          </Card>
        ))}
        {modal3 && <EdiAgente modal3={enviarDatosModal3} setModal3={setModal3} />}
        {modale1 && <VerAgente modale1={obtenerDatosModal3} getModal3={getModal1} />}
      </div>
    );
  };

  return <>{renderAgentProperties()}</>;
};

export default AgentProperties;
