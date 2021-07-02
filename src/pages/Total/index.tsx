import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { Backbox } from "../Dashboard/styles";

interface ICopa {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

const Total: React.FC = () => {
  const [copas, setCopas] = useState<ICopa[]>([])

  useEffect(() => {
    api.get('/worldcup').then(response => setCopas(response.data))
  }, [])

  const totBr = copas.filter(copa => copa.campeao === 'Brasil').length;
  const totIt = copas.filter(copa => copa.campeao === 'Itália').length;
  const totAl = copas.filter(copa => copa.campeao === 'Alemanha').length;
  const totFr = copas.filter(copa => copa.campeao === 'França').length;

  return (
    <Backbox>
      <Link key="voltar" to="/">Voltar</Link>
      <ul>
        <li>Total de vitórias do Brasil: {totBr}</li>
        <li>Total de vitórias da Itália: {totIt}</li>
        <li>Total de vitórias da Alemanha: {totAl}</li>
        <li>Total de vitórias da França: {totFr}</li>
      </ul>
    </Backbox>
  )}


export default Total;
