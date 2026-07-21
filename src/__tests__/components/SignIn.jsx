import React from 'react';
import { render, screen, userEvent, waitFor } from '@testing-library/react-native';
import { describe, it, expect, jest } from '@jest/globals';

import SignInForm from '../../components/SignIn/Form';

describe('SignIn', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn();

    await render(<SignInForm onSubmit={onSubmit} />);

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText('Username'), 'kalle');
    await user.type(screen.getByPlaceholderText('Password'), 'password');
    await user.press(screen.getByText('Sign in'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});