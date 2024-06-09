import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FruitForm } from './fruit-form.component.tsx';
import { defaultValues } from '../../config/fruit-radio.config.ts';

const mockSubmit = jest.fn();
const defaultRender = (
  <FruitForm defaultValues={defaultValues} onSubmit={() => mockSubmit} />
);

describe('Fruit Form', () => {
  it('renders three questions', () => {
    render(defaultRender);
    expect(screen.getByText('red fruit', { exact: false })).toBeInTheDocument();
    expect(
      screen.getByText('orange fruit', { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('yellow fruit', { exact: false }),
    ).toBeInTheDocument();
  }),
    it('renders questions by default in the unexpanded state', () => {
      render(defaultRender);
      expect(screen.getAllByText('+', { exact: false }).length).toEqual(3);
    });
});
