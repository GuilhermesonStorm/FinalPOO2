import React, {useEffect, useState} from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { Backbox } from "../Dashboard/styles";

interface RParams {
  id: string;
}

interface Copa {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

const Detalhes: React.FC = () => {
  const [copa, setCopa] = useState<Copa | null>(null);
  const { params } = useRouteMatch<RParams>();

  useEffect(() => {
    api.get(`/worldcup/${params.id}`).then(response => {
        setCopa(response.data);
        console.log(copa);
    });
}, [params.id]);

  return (
    <>
      <button><Link key="Voltar" to="/">Voltar</Link></button>
      <Backbox>
        <span>Detalhes da copa de {copa?.ano}:</span>
        <p>Sede: {copa?.sede}</p>
        <p>Campeão: {copa?.campeao}</p>
      </Backbox>
    </>
  )
}

export default Detalhes;
