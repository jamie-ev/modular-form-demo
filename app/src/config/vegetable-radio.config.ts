// @ts-ignore
import { RadioInputProps } from '@modular-form-demo/form-components';

export type VegetableFormData = {
  red: string;
  green: string;
  yellow: string;
};

export const defaultValues: VegetableFormData = {
  red: '',
  green: '',
  yellow: '',
};

export type RadioConfig = {
  label: string;
  name: string;
  responses: RadioInputProps[];
};

export const VegetableRadioConfig: RadioConfig[] = [
  {
    label: 'Which red vegetable do you like best?',
    name: 'red',
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
    name: 'green',
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
    name: 'yellow',
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
