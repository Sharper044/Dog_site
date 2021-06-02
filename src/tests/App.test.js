import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dog Pictures/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home page', () => {
  render(<App />);
  const homeCardTitle = screen.getByText(/Available Dog Breeds/i);
  expect(homeCardTitle).toBeInTheDocument();
});

test('fetches and displays list of breeds', async () => {
  render(<App />);
  const africanLink = await screen.findByText(/african/i);
  expect(africanLink).toBeInTheDocument();
});

test('goes to breed page when a breed is clicked', async () => {
  render(<App />);
  const africanLink = await screen.findByText(/african/i);
  africanLink.click();
  const images = await screen.findAllByAltText(/african/i);

  images.forEach((image) => expect(image).toBeInTheDocument());
});

// Could continue adding tests to test out full functionality,
// but I am out of time for this project.
