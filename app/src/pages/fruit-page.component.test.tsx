import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import {FruitPage} from "./fruit-page.component.tsx";

expect.extend(toHaveNoViolations);

describe('Fruit Page', () => {
  it('passes basic a11y testing', async () => {
    const {container} = render(<FruitPage/>);
    expect(await(axe(container))).toHaveNoViolations();
  });
})