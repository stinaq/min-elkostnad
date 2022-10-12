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
  const result = watt / 1000 / 100 * costPerKWh;
  
  return Math.round((result + Number.EPSILON) * 1000) / 1000
};

const DisplayCost = ({ watt, possessivePronoun, thing, costPerKWh }: DisplayCostProps) => {
  const resultingCost = calculateCost({watt, costPerKWh});
  return (
    <section className='display-cost'>
      <h2>{possessivePronoun} {thing} kommer kosta <strong>{resultingCost}</strong>kr</h2>
      <p>om den körs i 1 timme på {watt} watt och priset på el är {costPerKWh} öre per kWh</p>
    </section>
  );
}; 

export default DisplayCost;