import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardContainer } from './Card.styles';

export default function Card({ team }) {
  const history = useHistory();
  const { name, idx, crestUrl, id } = team;

  const linkToDetails = () => {
    history.push(`/team/${id}`);
  };

  return (
    <CardContainer timer={idx} onClick={linkToDetails}>
      <img src={crestUrl} alt={name} />

      <h4>{name}</h4>
    </CardContainer>
  );
}
