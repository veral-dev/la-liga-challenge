import React, { useContext } from 'react';
import { CompetitionContext } from '../context/Competition.context';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { Grid, Main, Container } from '../styles/general_styles';

export default function Home() {
  const { competition, teams, loading } = useContext(CompetitionContext);
  if (loading) return <Spinner />;

  return (
    <Main>
      <Container>
        {competition && <h1 style={{ textAlign: 'center' }}>{competition.name}</h1>}
        <h2 style={{ textAlign: 'center' }}>Select a team to see its roster</h2>
        <Grid>{!!teams && teams.map((team, idx) => <Card key={idx} team={{ ...team, idx }} />)}</Grid>
      </Container>
    </Main>
  );
}
