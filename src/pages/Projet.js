import React from "react";
import { useParams } from "react-router-dom";

function Projet() {
  let { slug } = useParams();

  return <div>Projet {slug} section</div>;
}

export default Projet;
