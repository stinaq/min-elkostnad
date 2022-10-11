import React from 'react'; // we need this to make JSX compile

type DisplayCostProps = {
  watt: number;
  possessivePronoun: string;
  thing: string;
  costPerKWh: number;
};

type calculateCostProps = {
  watt: number;
  costPerKWh: number;
};

const calculateCost = ({ watt, costPerKWh }: calculateCostProps): number => {
  // watt ==> kW, öre ==> kronor
  return watt / 1000 / 100 * costPerKWh;
};

const DisplayCost = ({ watt, possessivePronoun, thing, costPerKWh }: DisplayCostProps) => {
  const resultingCost = calculateCost({watt, costPerKWh});
  return (
    <p>{possessivePronoun} {thing} kommer kosta <strong>{resultingCost}</strong> om den körs i 1 timme på {watt} watt</p>
  );
}; 

export default DisplayCost;