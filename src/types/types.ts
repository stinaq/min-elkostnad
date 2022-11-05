export interface Power {
  userInput?: string;
  kiloWatt: number;
};

export interface Fee {
  userInput?: string;
  electricityKrPerKiloWattH: number;
};

export interface Thing {
  userInput?: string;
}

export interface FullCost {
  sumCost: number;
  taxCost: number;
  gridCost: number;
  electricityCost: number;
};
