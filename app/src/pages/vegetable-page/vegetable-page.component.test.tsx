import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import { VegetablePage } from './vegetable-page.component.tsx';

expect.extend(toHaveNoViolations);

describe('Vegetable Page', () => {
  it('passes basic a11y testing', async () => {
    const { container } = render(<VegetablePage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
