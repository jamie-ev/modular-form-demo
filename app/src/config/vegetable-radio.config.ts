import { RadioInputProps } from '@modular-form-demo/form-components';

enum VEGETABLES {
  RED = 'red',
  GREEN = 'green',
  YELLOW = 'yellow',
}

export type VegetableFormData = {
  [VEGETABLES.RED]: string;
  [VEGETABLES.GREEN]: string;
  [VEGETABLES.YELLOW]: string;
};

export const defaultValues: VegetableFormData = {
  [VEGETABLES.RED]: '',
  [VEGETABLES.GREEN]: '',
  [VEGETABLES.YELLOW]: '',
};

export type RadioConfig = {
  label: string;
  name: VEGETABLES;
  responses: RadioInputProps[];
};

export const VegetableRadioConfig: RadioConfig[] = [
  {
    label: 'Which red vegetable do you like best?',
    name: VEGETABLES.RED,
    responses: [
      {
        label: 'Beet is sweetest',
        value: 'beet',
      },
      {
        label: 'Tomato is the most versatile',
        value: 'tomato',
      },
      {
        label: 'Radish has the most kick',
        value: 'radish',
      },
    ],
  },
  {
    label: 'Which green vegetable is tastiest?',
    name: VEGETABLES.GREEN,
    responses: [
      {
        label: 'I love spinach',
        value: 'spinach',
      },
      {
        label: 'Broccoli is bomb',
        value: 'broccoli',
      },
      {
        label: 'Cucumber every time',
        value: 'cucumber',
      },
    ],
  },
  {
    label: 'Which yellow vegetable wins out?',
    name: VEGETABLES.YELLOW,
    responses: [
      {
        label: 'Squash is so good in soup',
        value: 'squash',
      },
      {
        label: 'Bell pepper sweetens nicely',
        value: 'bell pepper',
      },
      {
        label: "Can't beat old fashioned corn on the cob",
        value: 'corn',
      },
    ],
  },
];
