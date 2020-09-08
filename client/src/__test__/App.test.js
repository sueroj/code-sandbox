import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import App from '../App';
import { Sandbox } from 'components/Sandbox';

test('display logo title: code-sandbox', () => {
  const { getByText } = render(<App />);

  expect(getByText("code-sandbox")).toBeInTheDocument();
})

test("String displays: Billy and Bob", () => {
  const { getByText } = render(<App />);

  expect(getByText("Billy and Bob")).toBeInTheDocument();
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

// test("String displays: Billy and Bob", () => {
//   expect(sandbox.implementSolution()).toBe("Billy and Bob");
// })
