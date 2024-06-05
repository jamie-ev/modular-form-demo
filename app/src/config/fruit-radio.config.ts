// @ts-ignore - TODO investigate module not defined error
import {RadioInputProps} from "@modular-form-demo/form-components";

export type FruitFormData = {
  red: string;
  yellow: string;
  orange: string;
};

export const defaultValues: FruitFormData = {
  red: '',
  yellow: '',
  orange: '',
};

export type RadioConfig = {
  label: string;
  name: string;
  responses: RadioInputProps[];
};

export const FruitRadioConfig: RadioConfig[] = [
  {
    label: 'Which red fruit do you like best?',
    name: 'red',
    responses: [
      {
        label: 'Strawberry is the best',
        value: 'strawberry',
      },
      {
        label: 'Cherry tastes nicest',
        value: 'cherry',
      },
      {
        label: 'Watermelon is my fave',
        value: 'watermelon',
      },
    ],
  },
  {
    label: 'Which yellow fruit is tastiest?',
    name: 'yellow',
    responses: [
      {
        label: 'I love lemon',
        value: 'lemon',
      },
      {
        label: 'Banana is bomb',
        value: 'banana',
      },
      {
        label: 'Pineapple every time',
        value: 'pineapple',
      },
    ],
  },
  {
    label: 'Which orange fruit makes you happiest?',
    name: 'orange',
    responses: [
      {
        label: 'Peaches for days',
        value: 'peach',
      },
      {
        label: 'Tangerines are the best',
        value: 'tangerine',
      },
      {
        label: 'Can\'t beat old fashioned oranges',
        value: 'orange',
      },
    ],
  },
];