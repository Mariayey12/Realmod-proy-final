// FeaturedListings.js
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Edit from "./Edit";

const FeaturedListings = ({ feactures, enviarDatosModal1, setModal1 }) => {
  const [modal1, setModal1] = useState(false);

  const renderFeaturedListings = () => {
    return (
      <div className="divCards1">
        {feactures?.map((fi) => (
          <Card key={fi.id}>
            {/* ... existing code */}
          </Card>
        ))}
        {modal1 && <Edit modal1={enviarDatosModal1} setModal1={setModal1} />}
      </div>
    );
  };

  return <>{renderFeaturedListings()}</>;
};

export default FeaturedListings;
