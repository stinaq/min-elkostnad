type PowerExample = {
  userInput: string;
  kiloWatt: number;
  description: string;
};

const examples: Array<PowerExample> = [
  {
    userInput: '6',
    kiloWatt: 0.006,
    description: 'IKEA LED ljuskälla E27 806 lumen'
  },
  {
    userInput: '115',
    kiloWatt: 0.115,
    description: 'Golvvärme/m² för klinkers på max'
  },
  {
    userInput: '50',
    kiloWatt: 0.05,
    description: 'LED TV 42" i på-läge'
  },
  {
    userInput: '2',
    kiloWatt: 0.002,
    description: 'LED TV 42" i standby-läge'
  },
  {
    userInput: '0.05',
    kiloWatt: 0.00005,
    description: 'Genomsnittlig mobilladdare när den inte används'
  },
  {
    userInput: '500',
    kiloWatt: 0.5,
    description: 'Kaffebryggare'
  },
  {
    userInput: '5000',
    kiloWatt: 5,
    description: 'Bastuaggregat på max'
  },
];

const getRandomExample = (): PowerExample =>
  examples[Math.floor(Math.random()*powerData.examples.length)]

export const powerData = {
  examples,
  getRandomExample,
};
