import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Logo } from "../components/Logo";
import { MatchType } from "../enum/MatchType";

import '../styles/register.scss';

interface RegisterParams {
  type: string;
}

export const Register = () => {
  const params = useParams<RegisterParams>();
  const history = useHistory();

  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const [matchType, setMatchType] = useState<MatchType>();

  useEffect(() => {
    const type = Number(params.type);

    switch(type) {
      case MatchType.PVP_LOCAL: 
      case MatchType.PVP_ONLINE:
      case MatchType.PVE_ALGORITM:
        setMatchType(type)
        break;
    }
  }, [params.type]);

  return <div id="page-register">
    <Logo />
  </div>
}