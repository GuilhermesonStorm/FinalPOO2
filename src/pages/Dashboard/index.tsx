import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';

import { Backbox, Form, Table } from './styles';
import api from '../../services/api';


interface ICopa {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [copas, setCopas] = useState<ICopa[]>([]);
  const [ano, setAno] = useState('');
  const [sede, setSede] = useState('');
  const [campeao, setCampeao] = useState('');

  async function handleAddCopa(copa: any) {
    copa.preventDefault();

    let id = '';

    const novaCopa = {
      id,
      ano,
      sede,
      campeao,
    }

    console.log('Nova Copa:', novaCopa)

    await api.post('/worldcup', novaCopa);
    setCopas([...copas, novaCopa])
    console.log('Lista de copas: ', copas );
    alert('Copa incluida com sucesso');
    setAno('');
    setCampeao('');
    setSede('');
    window.location.reload();
  }

  async function deleteCup(id: string) {
    await api.delete(`/worldcup/${id}`)
    setCopas(copas.filter(copa => copa.id !== id))
  }


  useEffect(() => {
    api.get('/worldcup').then(response => setCopas(response.data))
  }, [])

  return (
    <Backbox>

      <span>Copas do Mundo</span>
      <button><Link key="total" to="/total">Total</Link></button>

      <Form onSubmit={handleAddCopa}>
        <input type='text' name='ano' placeholder='Ano da Copa Mundo' value={ano}
        onChange={e => setAno(e.target.value)}/>
        <input type='text' name='Sede' placeholder='Sede da Copa do Mundo' value={sede}
        onChange={e => setSede(e.target.value)}/>
        <input type='text' name='campeao' placeholder='Campeao Mundial' value={campeao}
        onChange={e => setCampeao(e.target.value)}/>
        <button type="submit">Salvar</button>
      </Form>

      <Table>
          <thead>
            <tr>
              <td>Ano da Copa</td>
              <td>Sede da Copa</td>
              <td>Campeão da Copa</td>

            </tr>
          </thead>
          <tbody>
            {copas.map(copa =>
              <tr key={copa.id}>
                <td>{copa.ano}</td>
                <td>{copa.sede}</td>
                <td>{copa.campeao}</td>
                <td><button onClick={() => deleteCup(copa.id)}>Excluir</button></td>
                <td><Link key="detalhes" to={`/worldcup/${copa.id}`}>Detalhes</Link></td>
              </tr>
            )}
          </tbody>
        </Table>
    </ Backbox>
)};

export default Dashboard;
