// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockNode/i);
    expect(titleElement).toBeInTheDocument();
});
