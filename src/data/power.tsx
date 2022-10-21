type PowerExamples = {
  watt: number;
  description: string;
};

const examples: Array<PowerExamples> = [
  {
    watt: 6,
    description: 'IKEA LED ljuskälla E27 806 lumen'
  },
  {
    watt: 115,
    description: 'Golvvärme för klinkers per m2'
  },
  {
    watt: 50,
    description: 'LED TV 42" i på-läge'
  },
  {
    watt: 2,
    description: 'LED TV 42" i standby-läge'
  },
  {
    watt: 0.05,
    description: 'Genomsnittlig mobilladdare när den inte används'
  },
  {
    watt: 500,
    description: 'Kaffebryggare'
  },
  {
    watt: 5000,
    description: 'Bastuaggregat på max'
  },
];

export const powerData = {
  examples
};
