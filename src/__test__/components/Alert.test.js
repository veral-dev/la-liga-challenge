import React from 'react';
import { screen } from '@testing-library/react';

import Alert from '../../components/ui/Alert';
import { AlertContext } from '../../context/Alert.context';
import { renderWithRouter } from '../utils';

describe('Alert component', () => {
  test('renders correctly', async () => {
    expect(
      renderWithRouter(
        <AlertContext.Provider value={{ setErrorMsg: jest.fn(), errorMsg: null }}>
          <Alert message="Alert message" />
        </AlertContext.Provider>
      )
    ).toMatchSnapshot();
  });

  test('When alert is an error', () => {
    renderWithRouter(
      <AlertContext.Provider value={{ setErrorMsg: jest.fn(), errorMsg: '' }}>
        <Alert message="Error message" />
      </AlertContext.Provider>
    );
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
    expect(screen.getByText(/error message/i)).toHaveStyle(`background-color: #f3aa9d;`);
  });
});
