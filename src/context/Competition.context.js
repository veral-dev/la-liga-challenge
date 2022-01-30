import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCompetition } from '../services/services';
import { AlertContext } from './Alert.context';

export const CompetitionContext = createContext();
const CompetitionProvider = (props) => {
  const [competition, setCompetition] = useState(null);
  const [teams, setTeams] = useState(null);

  const [loading, setLoading] = useState(false);
  const { setErrorMsg } = useContext(AlertContext);

  const fetchCompetition = async () => {
    setLoading(true);
    try {
      const competitionList = await getCompetition();
      setTeams(competitionList.teams);
      setCompetition(competitionList.competition);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompetition();
  }, []);

  return (
    <CompetitionContext.Provider
      value={{
        competition,
        teams,
        loading
      }}
    >
      {props.children}
    </CompetitionContext.Provider>
  );
};

export default CompetitionProvider;
