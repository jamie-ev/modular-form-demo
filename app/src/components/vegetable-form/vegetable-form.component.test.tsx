import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VegetableForm } from './vegetable-form.component.tsx';
import { defaultValues } from '../../config/vegetable-radio.config.ts';

const mockSubmit = jest.fn();
const defaultRender = (
  <VegetableForm defaultValues={defaultValues} onSubmit={() => mockSubmit} />
);

describe('Vegetable Form', () => {
  it('renders three questions', () => {
    render(defaultRender);
    expect(
      screen.getByText('red vegetable', { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('green vegetable', { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('yellow vegetable', { exact: false }),
    ).toBeInTheDocument();
  }),
    it('renders questions by default in the unexpanded state', () => {
      render(defaultRender);
      expect(screen.getAllByText('+', { exact: false }).length).toEqual(3);
    });
});
