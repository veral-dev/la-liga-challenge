import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../utils';
import { CompetitionContext } from '../../context/Competition.context';
import Home from '../../pages/Home';
import { fakeResponse } from '../consts/helper';

const fakeData = [fakeResponse];
const competition = {
  id: 2014,
  area: {
    id: 2224,
    name: 'Spain'
  },
  name: 'Primera Division',
  code: 'PD',
  plan: 'TIER_ONE',
  lastUpdated: '2021-04-17T00:00:28Z'
};

beforeEach(() =>
  renderWithRouter(
    <CompetitionContext.Provider value={{ teams: fakeData, competition }}>
      <Home />
    </CompetitionContext.Provider>
  )
);

describe('Home page', () => {
  test('should rendering home page', () => {
    expect(screen.getByText(/select a team to see its roster/i)).toBeInTheDocument();
  });
  test('there must be a competition title', async () => {
    await waitFor(() => {
      expect(screen.getByText('Primera Division')).toBeInTheDocument();
    });
  });
  test('there must be a team card if the list have information', async () => {
    await waitFor(() => {
      expect(screen.getByText('Athletic Club')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
});
