import axios from 'axios';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Match } from '../models/Match';
import { X, Circle } from '@styled-icons/feather'

import '../styles/loading.scss';

export function Loading() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    async function handleWaitCreateMatch() {
      try {
        // @ts-ignore
        const {request, destiny} = location.state;

        if(!request || !destiny) {
          alert('Missing parameters...');
          history.goBack();
        }

        const response = await axios.post('http://localhost:5000/api/match/create-match', request);
        
        if(response.status === 200) {
          const match: Match = response.data;
          history.push({
            pathname: destiny,
            state: {
              match
            }
          });
        }
      } catch(err) {
        alert('Não foi possivel realizar a operação desejada, o servidor pode estar indisponível ou os parametros informados incorretos.');
        history.goBack();
      }
    }

    handleWaitCreateMatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="page-loading">
      <div className="animation-container">
        <X className="x1"/>
        <Circle className="circle"/>
        <X className="x2" />
      </div>
      <span>Espere um pouco enquanto preparamos um oponente!</span>
    </div>
  )
}