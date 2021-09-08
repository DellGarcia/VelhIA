import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BoardComponent } from '../components/BoardComponent';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Match } from '../models/Match';

import '../styles/match.scss';

export function LocalMatch() {
  const history = useHistory();
  const location = useLocation();

  const [match, setMatch] = useState<Match>();

  useEffect(() => {
    async function handleVerifyMatchData() {
      let tempMatch;
      if(location.state) {
        try {
          // @ts-ignore
          tempMatch = location.state.match;
        } catch {}
      }
      else if(!tempMatch && localStorage.getItem('match')) {
        // @ts-ignore
        tempMatch = JSON.parse(localStorage.getItem('match'));
      } else {
        history.goBack();
        return;
      }
      try {
        setMatch(tempMatch);
        localStorage.setItem('match', JSON.stringify(tempMatch));
      } catch(err) {
        alert('Something was wrong...\nReturning to the previous page!');
        history.goBack();
      }
    }

    handleVerifyMatchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function handleClickCallback(columnId: number) {
    const moveRequest = {
      matchId: match?.id,
      columnId,
    }

    console.log(moveRequest);
  }

  return (
    <div id="match-page">
      <Header />
      {match && <BoardComponent board={match?.board} clickCallback={handleClickCallback}/>}
      <Footer />
    </div>
  )
}