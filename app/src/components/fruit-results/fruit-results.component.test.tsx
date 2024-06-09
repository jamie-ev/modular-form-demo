import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FruitResults } from './fruit-results.component.tsx';

const mockUpdate = jest.fn();

describe('Fruit Results', () => {
  it('renders singular data when passed', () => {
    render(
      <FruitResults
        onUpdate={mockUpdate}
        data={{ red: 'test', yellow: '', orange: '' }}
      />,
    );
    expect(screen.getByText('sweet', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText('cookies', { exact: false })).toBeNull();
    expect(screen.queryByText('popsicles', { exact: false })).toBeNull();
  }),
    it('renders multiple data when passed', () => {
      render(
        <FruitResults
          onUpdate={mockUpdate}
          data={{ red: 'test', yellow: 'test', orange: '' }}
        />,
      );
      expect(screen.getByText('sweet', { exact: false })).toBeInTheDocument();
      expect(
        screen.queryByText('cookies', { exact: false }),
      ).toBeInTheDocument();
      expect(screen.queryByText('popsicles', { exact: false })).toBeNull();
    }),
    it('renders the empty state when no data passed', () => {
      render(
        <FruitResults
          onUpdate={mockUpdate}
          data={{ red: '', yellow: '', orange: '' }}
        />,
      );
      expect(screen.getByText('Nothing', { exact: false })).toBeInTheDocument();
      expect(screen.queryByText('sweet', { exact: false })).toBeNull();
      expect(screen.queryByText('cookies', { exact: false })).toBeNull();
      expect(screen.queryByText('popsicles', { exact: false })).toBeNull();
    }),
    it('resets as expected', () => {
      render(
        <FruitResults
          onUpdate={mockUpdate}
          data={{ red: '', yellow: '', orange: '' }}
        />,
      );
      fireEvent.click(screen.getByText('Update', { exact: false }));
      expect(mockUpdate).toHaveBeenCalledTimes(1);
    });
});
