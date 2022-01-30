import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AlertContext } from '../context/Alert.context';
import AppRouter from '../routes/AppRoutes';
import CompetitionProvider, { CompetitionContext } from '../context/Competition.context';

const renderWithProvider = (ui) =>
  render(
    <CompetitionContext.Provider
      value={{
        competition: [{}],
        loading: false
      }}
    >
      <AlertContext.Provider value={{ setErrorMsg: jest.fn(), errorMsg: 'Error text' }}>
        <CompetitionProvider>{ui}</CompetitionProvider>
      </AlertContext.Provider>
    </CompetitionContext.Provider>,
    {
      wrapper: Router
    }
  );

const goTo = (route) => window.history.pushState({}, 'Test page', route);

describe('Router', () => {
  test('route to home page', async () => {
    goTo('/');
    renderWithProvider(<AppRouter />);

    expect(await screen.findByText(/select a team to see its roster/i)).toBeInTheDocument();
    expect(await screen.findByText(/error text/i)).toBeInTheDocument();
  });
});
