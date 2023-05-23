import { render, fireEvent } from '@testing-library/react';
import { mockNextRouter } from 'next-router-mock';
import LoginScreen from './loginscreen';

describe('LoginScreen', () => {
  beforeEach(() => {
    mockNextRouter({
      push: jest.fn(),
    });
  });

  test('redirects to dashboard on login', () => {
    const { getByLabelText, getByText } = render(<LoginScreen />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    // Set input values
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Trigger login
    fireEvent.click(loginButton);

    // Check if the router.push function was called with the correct path
    expect(mockNextRouter.push).toHaveBeenCalledWith('/dashboard');
  });
});
