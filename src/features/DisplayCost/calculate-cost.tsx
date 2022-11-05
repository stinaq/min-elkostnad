import { FullCost } from '../../types/types';

type GetElectricalCostProps = {
  kiloWatt: number;
  electricalFeeKrPerKWh: number;
};

const getElectricityCost = ({ kiloWatt: kW, electricalFeeKrPerKWh }: GetElectricalCostProps): number => {
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
  kiloWatt: number;
  feeKrPerKWh: number;
};

const getFullCost = ({ kiloWatt, feeKrPerKWh }: FullCostProps): FullCost => {
  const taxCost = getElectricalTaxCost(kiloWatt);
  const gridCost = getElectricalGridCost(kiloWatt);
  const electricityCost = getElectricityCost({ kiloWatt: kiloWatt, electricalFeeKrPerKWh: feeKrPerKWh });

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
