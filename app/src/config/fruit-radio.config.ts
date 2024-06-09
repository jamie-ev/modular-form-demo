import { RadioInputProps } from '@modular-form-demo/form-components';

enum FRUITS {
  RED = 'red',
  YELLOW = 'yellow',
  ORANGE = 'orange',
}

export type FruitFormData = {
  [FRUITS.RED]: string;
  [FRUITS.YELLOW]: string;
  [FRUITS.ORANGE]: string;
};

export const defaultValues: FruitFormData = {
  [FRUITS.RED]: '',
  [FRUITS.YELLOW]: '',
  [FRUITS.ORANGE]: '',
};

export type RadioConfig = {
  label: string;
  name: FRUITS;
  responses: RadioInputProps[];
};

export const FruitRadioConfig: RadioConfig[] = [
  {
    label: 'Which red fruit do you like best?',
    name: FRUITS.RED,
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
    name: FRUITS.YELLOW,
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
    name: FRUITS.ORANGE,
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
        label: "Can't beat old fashioned oranges",
        value: 'orange',
      },
    ],
  },
];
