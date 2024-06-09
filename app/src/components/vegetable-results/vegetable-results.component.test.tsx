import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VegetableResults } from './vegetable-results.component.tsx';

const mockUpdate = jest.fn();

describe('Fruit Results', () => {
  it('renders singular data when passed', () => {
    render(
      <VegetableResults
        onUpdate={mockUpdate}
        data={{ red: 'test', yellow: '', green: '' }}
      />,
    );
    expect(screen.getByText('salad', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText('smoothies', { exact: false })).toBeNull();
    expect(screen.queryByText('stir', { exact: false })).toBeNull();
  }),
    it('renders multiple data when passed', () => {
      render(
        <VegetableResults
          onUpdate={mockUpdate}
          data={{ red: 'test', yellow: 'test', green: '' }}
        />,
      );
      expect(screen.getByText('salad', { exact: false })).toBeInTheDocument();
      expect(screen.queryByText('smoothies', { exact: false })).toBeNull();
      expect(screen.queryByText('stir', { exact: false })).toBeInTheDocument();
    }),
    it('renders the empty state when no data passed', () => {
      render(
        <VegetableResults
          onUpdate={mockUpdate}
          data={{ red: '', yellow: '', green: '' }}
        />,
      );
      expect(screen.getByText('Nothing', { exact: false })).toBeInTheDocument();
      expect(screen.queryByText('salad', { exact: false })).toBeNull();
      expect(screen.queryByText('smoothies', { exact: false })).toBeNull();
      expect(screen.queryByText('stir', { exact: false })).toBeNull();
    }),
    it('resets as expected', () => {
      render(
        <VegetableResults
          onUpdate={mockUpdate}
          data={{ red: '', yellow: '', green: '' }}
        />,
      );
      fireEvent.click(screen.getByText('Update', { exact: false }));
      expect(mockUpdate).toHaveBeenCalledTimes(1);
    });
});
