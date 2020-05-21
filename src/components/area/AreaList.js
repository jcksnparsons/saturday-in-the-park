import React, { useState, useEffect } from "react";
import AreaListElement from "./AreaListElement";
import AreaManager from "../../modules/AreaManager";

const AreaList = () => {
  const [areas, setAreas] = useState([]);

  const getAreas = () => {
    return AreaManager.getAllParkAreas().then((areasFromAPI) => {
      setAreas(areasFromAPI);
    });
  };

  useEffect(() => {
    getAreas();
  }, []);

  return (
    <div>
      {areas.map((area) => (
        <AreaListElement key={area.id} area={area} />
      ))}
    </div>
  );
};

export default AreaList;
