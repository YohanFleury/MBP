import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';

describe('App component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);

    const textElement = getByText(/Open up App.tsx to start working on your app, with chat fucking gpt!/i);

    expect(textElement).toBeDefined();
  });
});
