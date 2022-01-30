import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import { AlertContext } from '../../context/Alert.context';
import { calculateAge } from '../../helpers';
import ArrowDown from '../../icons/ArrowDown';
import ArrowUp from '../../icons/ArrowUp';
import { getTeam } from '../../services/services';
import { Container, Main, Error404 } from '../../styles/general_styles';
import { Data, Name, TeamGrid, TeamContainer, SeeMore, SearchInput, TeamHeader } from './DetailTeam.style';

export default function DetailTeam() {
  const { id } = useParams();
  const { setErrorMsg } = useContext(AlertContext);

  const [team, setTeam] = useState(null);
  const [teamName, setTeamName] = useState('');

  const [playerList, setPlayerList] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(true);

  useEffect(() => {
    if (id) {
      fetchTeam(id);
    } else {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (team) setPlayerList(team.slice(0, 3));
  }, [team]);

  const fetchTeam = async (id) => {
    try {
      const data = await getTeam(id);
      setTeam(data.squad);
      setTeamName(data.name);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  if (!team && !loading) {
    return (
      <Error404>
        <h5>{"Error :( page doesn't exist"}</h5>
        <Link to="/">Go home</Link>
      </Error404>
    );
  }

  const seeMore = () => {
    if (playerList.length < team.length) {
      setPlayerList(team.slice(0, playerList.length + 3));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue) {
      setPlayerList(team.slice(0, 3));
      return;
    }
    if (team) {
      const filtered = team.filter((row) => row.name.toLowerCase().includes(searchValue.toLowerCase()));
      setPlayerList(filtered);
    }
  };

  const sortByName = () => {
    if (sortBy) {
      const sortered = team.sort((a, b) => a.name.localeCompare(b.name));
      setPlayerList(sortered.slice(0, 3));
      setTeam(sortered);
    } else {
      const sortered = team.sort((a, b) => b.name.localeCompare(a.name));
      setPlayerList(sortered.slice(0, 3));
      setTeam(sortered);
    }
    setSortBy(!sortBy);
  };

  return (
    <Main>
      <Container>
        <TeamHeader>
          <h1>{teamName}</h1>
          <form onSubmit={handleSearch}>
            <SearchInput placeholder="Search" onChange={(ev) => setSearchValue(ev.target.value)} name="search" value={searchValue} />
          </form>
        </TeamHeader>
        <TeamContainer>
          <TeamGrid>
            <span style={{ minWidth: '100px', cursor: 'pointer' }} onClick={() => sortByName()}>
              Name {sortBy ? <ArrowUp /> : <ArrowDown />}
            </span>
            <span>Nationality</span>
            <span>Position</span>
            <span style={{ textAlign: 'right' }}>Age</span>
          </TeamGrid>
          {playerList &&
            playerList.map((player) => (
              <TeamGrid key={player.id}>
                <Name>{player.name}</Name>
                <Data>{player.nationality}</Data>
                <Data>{player.position}</Data>
                <Data style={{ textAlign: 'right' }}>{calculateAge(player.dateOfBirth)}</Data>
              </TeamGrid>
            ))}
          {playerList && playerList.length < team.length && (
            <SeeMore>
              <Button onClick={seeMore}>See more</Button>
            </SeeMore>
          )}
        </TeamContainer>
      </Container>
    </Main>
  );
}
