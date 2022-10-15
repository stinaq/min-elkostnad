
type GetElectricalCostProps = {
  kW: number;
  electricalFeeKrPerKWh: number;
};

const getElectricityCost = ({ kW, electricalFeeKrPerKWh }: GetElectricalCostProps): number => {
  const result = kW * electricalFeeKrPerKWh;
  
  return result;
};

const getElectricalTaxCost = (kW: number): number => {
  const taxKrPerKWh = 0.45;
  
  return kW * taxKrPerKWh;
};

const getElectricalGridCost = (kW: number): number => {
  const gridFeeKrPerKWh = 0.2425;
  
  return kW * gridFeeKrPerKWh;
};

type FullCostProps = {
  kW: number;
  feeKrPerKWh: number;
};

type FullCostType = {
  sumCost: number;
  taxCost: number;
  gridCost: number;
  electricityCost: number;
};

const getFullCost = ({ kW, feeKrPerKWh }: FullCostProps): FullCostType => {
  const taxCost = getElectricalTaxCost(kW);
  const gridCost = getElectricalGridCost(kW);
  const electricityCost = getElectricityCost({ kW, electricalFeeKrPerKWh: feeKrPerKWh });

  return {
    sumCost: taxCost + gridCost + electricityCost,
    taxCost,
    gridCost,
    electricityCost
  };
};

export const calculateCost = {
  getFullCost
};
