import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('display logo title: code-sandbox', () => {
  const { getByText } = render(<App />);

  expect(getByText("code-sandbox")).toBeInTheDocument();
})

test("Link displayed: Algorithms", () => {
  const { getAllByRole, getByRole } = render(<App />);

  expect(getByRole('link', {name: /Algorithms/i})).toBeInTheDocument();
})

test("Link displayed: Quizes", () => {
  const { getAllByRole, getByRole } = render(<App />);

  expect(getByRole('link', {name: /Quizes/i})).toBeInTheDocument();
})

test("Link displayed: Katas", () => {
  const { getAllByRole, getByRole } = render(<App />);

  expect(getByRole('link', {name: "Katas"})).toBeInTheDocument();
})

test('display logo title: code-sandbox', () => {
  const { getByText } = render(<App />);

  expect(getByText("code-sandbox")).toBeInTheDocument();
})
