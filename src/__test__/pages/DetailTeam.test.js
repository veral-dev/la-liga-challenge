import React from 'react';
import { screen, waitFor, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import DetailTeam from '../../pages/DetailTeam';
import { CompetitionContext } from '../../context/Competition.context';
import { AlertContext } from '../../context/Alert.context';

const renderComponent = ({ id }) =>
  render(
    <CompetitionContext.Provider value={{ fetchCompetition: jest.fn() }}>
      <AlertContext.Provider value={{ setErrorMsg: jest.fn() }}>
        <MemoryRouter initialEntries={[`/team/${id}`]}>
          <Route path="/team/:id">
            <DetailTeam />
          </Route>
        </MemoryRouter>
      </AlertContext.Provider>
    </CompetitionContext.Provider>
  );

describe('DetailTeam', () => {
  test('renders initial with wrong params id', async () => {
    renderComponent({ id: '452sdasd45' });
    await waitFor(() => expect(screen.getByText(/error/i)));
  });
});
